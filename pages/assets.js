import { useSession, getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const prisma = new PrismaClient();

export default function Assets({ equipment: initialEquipment, users }) {
    const { data: session } = useSession();
    const [equipment, setEquipment] = useState(initialEquipment);

    useEffect(() => {
        setEquipment(initialEquipment);
    }, [initialEquipment]);

    if (!session) return <div>Access Denied</div>;

    const removeUser = async (equipmentId) => {
        try {
            const response = await fetch('/api/removeUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ equipmentId }),
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const updatedEquipment = await response.json();

            setEquipment(currentEquipment =>
                currentEquipment.map(item =>
                    item.id === updatedEquipment.id ? updatedEquipment : item
                )
            );
        } catch (error) {
            console.error('Failed to remove user:', error);
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
                                {equipment.map((item) => (
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
                                                    <button className="red-link-with-transition text-red-600" onClick={() => removeUser(item.id)}>Remove User</button>
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