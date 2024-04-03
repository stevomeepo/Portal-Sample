import { useSession, getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import Link from 'next/link';
import { useState, useEffect, Fragment, useRef, useMemo } from 'react';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import styles from '../styles/searchbar.css';
import { useRouter } from 'next/router';

const prisma = new PrismaClient();

export default function Assets({ equipment: initialEquipment, users }) {
    const { data: session } = useSession();
    const [equipment, setEquipment] = useState(initialEquipment);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState('');
    const [selectedUserName, setSelectedUserName] = useState('');
    const [selectedEquipmentId, setSelectedEquipmentId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUser, setSelectedUser] = useState(users[0]);
    const [isExpanded, setIsExpanded] = useState(false);
    const searchBoxRef = useRef(null);
    const router = useRouter();

    const handleSort = (sortField) => {
        const currentSortField = router.query.sortField;
        const currentSortOrder = router.query.sortOrder;
        const newSortOrder = currentSortField === sortField && currentSortOrder === 'asc' ? 'desc' : 'asc';
      
        router.push({
          pathname: router.pathname,
          query: { ...router.query, sortField, sortOrder: newSortOrder },
        }, undefined, { shallow: true }).then(() => window.location.reload());
      };

    const toggleSearchBar = () => {
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
            // Focus on the input when expanding
            document.querySelector('.input-search').focus();
        } else {
            // Clear the search term and blur the input when collapsing
            setSearchTerm("");
            document.querySelector('.input-search').blur();
        }
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
                setIsExpanded(false); // Collapse the search bar
            }
        }
    
        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Remove event listener on cleanup
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchBoxRef]);

    if (!session) return <div>Access Denied</div>;

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
            <div className="search-box pb-5" ref={searchBoxRef}>
                <button className={`search-button ${isExpanded ? 'active' : ''}`} onClick={toggleSearchBar}>
                    <i className="fas fa-search"></i>
                </button>
                <input
                    type="text"
                    className="input-search p-2px"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsExpanded(true)}
                />
            </div>
            <div className="rounded-lg border text-card-foreground bg-white shadow-md">
                <div className="p-0">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead>
                                <tr className="border-b">
                                    <th className="h-12 px-4 text-left align-middle text-center" onClick={() => handleSort('title')}>
                                        Title <i className="fas fa-sort"></i>
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle text-center" onClick={() => handleSort('description')}>
                                        Serial Number <i className="fas fa-sort"></i>
                                    </th>
                                    {session.user.isAdmin && (
                                        <th className="h-12 px-4 text-left align-middle text-center" onClick={() => handleSort('user')}>
                                            Owner <i className="fas fa-sort"></i>
                                        </th>
                                    )}
                                    {session.user.isAdmin && <th className="h-12 px-4 text-left align-middle text-center">History</th>}
                                    {session.user.isAdmin && <th className="h-12 px-4 text-left align-middle text-center">Actions</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {equipment.filter(item =>
                                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
                                ).map((item) => (
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

    const { query } = context;
    const sortField = query.sortField || 'title';
    const sortOrder = query.sortOrder || 'asc';
    const searchTerm = query.searchTerm || '';

    let orderByClause;
    if (sortField === 'ownerName') {
        orderByClause = {
            user: {
                firstName: sortOrder,
            },
        };
    } else {
        orderByClause = {
            [sortField]: sortOrder,
        };
    }

    let equipmentQueryOptions = {
        where: {
            AND: [
                {
                    OR: [
                        {
                            title: {
                                contains: searchTerm,
                                mode: 'insensitive',
                            },
                        },
                        {
                            description: {
                                contains: searchTerm,
                                mode: 'insensitive',
                            },
                        },
                    ],
                },
            ],
        },
        include: {
            user: true,
        },
        orderBy: orderByClause,
    };

    if (!session.user.isAdmin) {
        equipmentQueryOptions.where.AND.push({ userId: session.user.id });
    }

    const equipment = await prisma.equipment.findMany(equipmentQueryOptions);

    let users = [];
    if (session.user.isAdmin) {
        users = await prisma.user.findMany({
            select: { id: true, firstName: true, lastName: true },
        });
    }

    users = JSON.parse(JSON.stringify(users));
    const serializedEquipment = JSON.parse(JSON.stringify(equipment));

    return {
        props: { equipment: serializedEquipment, users },
    };
}