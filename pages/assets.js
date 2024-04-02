import { useSession, getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import Link from 'next/link';
import { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const prisma = new PrismaClient();

export default function Assets({ equipment: initialEquipment, users }) {
    const { data: session } = useSession();
    const [equipment, setEquipment] = useState(initialEquipment);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState('');
    const [selectedUserName, setSelectedUserName] = useState('');
    const [selectedEquipmentId, setSelectedEquipmentId] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term for equipment filtering
    const [selectedUser, setSelectedUser] = useState(users[0]); // State for selected user in Combobox
    const [userQuery, setUserQuery] = useState(""); // State to hold the search term for user filtering in Combobox

    useEffect(() => {
        setEquipment(initialEquipment);
    }, [initialEquipment]);

    if (!session) return <div>Access Denied</div>;

    // Filter equipment based on the search term
    const filteredEquipment = equipment.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filter users based on the search term in Combobox
    const filteredUsers = userQuery === '' ? users : users.filter(user =>
        user.name.toLowerCase().replace(/\s+/g, '').includes(userQuery.toLowerCase().replace(/\s+/g, ''))
    );

    const openModal = (equipmentId, description, userName) => {
        setSelectedEquipmentId(equipmentId);
        setSelectedDescription(description);
        setSelectedUserName(userName);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

const confirmRemoveUser = async () => {
    if (!selectedEquipmentId) {
        console.error("No equipment selected for user removal.");
        return;
    }

    try {
        const response = await fetch('/api/removeUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ equipmentId: selectedEquipmentId }),
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const updatedEquipment = await response.json();
        
        // Update the equipment state to reflect the change
        setEquipment(currentEquipment =>
            currentEquipment.map(item =>
                item.id === updatedEquipment.id ? updatedEquipment : item
            )
        );
        
        closeModal();
    } catch (error) {
        console.error('Failed to remove user from equipment:', error);
    }
};

    const addUser = async (equipmentId, userId) => {
        try {
            const response = await fetch('/api/addUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ equipmentId, userId }),
                credentials: 'include',
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
    
            const updatedEquipment = await response.json();
            setEquipment(currentEquipment =>
                currentEquipment.map(item =>
                    item.id === updatedEquipment.id ? { ...item, user: updatedEquipment.user, userId: updatedEquipment.userId } : item
                )
            );
        } catch (error) {
            console.error('Failed to add user to equipment:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-xl font-semibold mb-4">Assets</h2>
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 p-2 border rounded"
            />
            <div className="rounded-lg border text-card-foreground bg-white shadow-md">
                <div className="p-0">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead>
                                <tr className="border-b">
                                    <th className="h-12 px-4 text-left align-middle text-center">Title</th>
                                    <th className="h-12 px-4 text-left align-middle text-center">Serial Number</th>
                                    {session.user.isAdmin && <th className="h-12 px-4 text-left align-middle text-center">Owner</th>}
                                    {session.user.isAdmin && <th className="h-12 px-4 text-left align-middle text-center">History</th>}
                                    {session.user.isAdmin && <th className="h-12 px-4 text-left align-middle text-center">Actions</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEquipment.map((item) => (
                                    <tr key={item.id} className="border-b">
                                        <td className="p-4 align-middle text-center">{item.title}</td>
                                        <td className="p-4 align-middle text-center">{item.description}</td>
                                        {session.user.isAdmin && (
                                            <td className="p-4 align-middle text-center">
                                                {item.user ? `${item.user.firstName} ${item.user.lastName}` : 'N/A'}
                                            </td>
                                        )}
                                        {session.user.isAdmin && (
                                            <td className="p-4 align-middle text-center">
                                                <Link href={`/assets/${item.id}`} className="link-with-transition">View</Link>
                                            </td>
                                        )}
                                        {session.user.isAdmin && (
                                            <td className="p-4 align-middle text-center">
                                                {!item.userId ? (
                                                    <select onChange={(e) => addUser(item.id, e.target.value)}>
                                                        <option value="">Assign User</option>
                                                        {users.map(user => (
                                                            <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <button className="red-link-with-transition text-red-600" onClick={() => openModal(item.id, item.description, `${item.user.firstName} ${item.user.lastName}`)}>Remove User</button>
                                                )}
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Modal for confirmation */}
            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Confirm Removal
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Are you sure you want to remove <span className="font-bold">{selectedUserName}</span> from <span className="font-bold">{selectedDescription}</span>?
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                            onClick={confirmRemoveUser}
                                        >
                                            Yes, Remove User
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            No, Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    let equipment;
    if (session.user.isAdmin) {
        // Fetch all equipment for admin
        equipment = await prisma.equipment.findMany({
          include: {
              user: true,
          },
      });
    } else {
        equipment = await prisma.equipment.findMany({
            where: {
                userId: session.user.id,
            },
            include: {
              user: true,
            },
        });
    }

    let users = [];
    if (session.user.isAdmin) {
      users = await prisma.user.findMany({
        select: { id: true, firstName: true, lastName: true }
      });
    }
    users = JSON.parse(JSON.stringify(users));
    equipment = JSON.parse(JSON.stringify(equipment));

    return {
        props: { equipment, users },
    };
}