import { useSession, getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import Sidebar from '../components/Sidebar';
import Link from 'next/link';

const prisma = new PrismaClient();

export default function Assets({ equipment }) {
    const { data: session } = useSession();

    if (!session) return <div>Access Denied</div>;

    const headingText = session.user.isAdmin ? "Assets" : "Your Assets";

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-xl font-semibold mb-4">Equipment</h2>
            <div className="rounded-lg border text-card-foreground bg-white shadow-md">
                <div className="p-0">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead>
                                <tr className="border-b">
                                    <th className="h-12 px-4 text-left align-middle">Title</th>
                                    <th className="h-12 px-4 text-left align-middle">Serial Number</th>
                                    {session.user.isAdmin && <th className="h-12 px-4 text-left align-middle">Owner</th>}
                                    {session.user.isAdmin && <th className="h-12 px-4 text-left align-middle">History</th>}
                                    {session.user.isAdmin && <th className="h-12 px-4 text-left align-middle">Actions</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {equipment.map((item) => (
                                    <tr key={item.id} className="border-b">
                                        <td className="p-4 align-middle">{item.title}</td>
                                        <td className="p-4 align-middle">{item.description}</td>
                                        {session.user.isAdmin && (
                                            <td className="p-4 align-middle">
                                                {item.user ? `${item.user.firstName} ${item.user.lastName}` : 'N/A'}
                                            </td>
                                        )}
                                        {session.user.isAdmin && (
                                            <td className="p-4 align-middle">
                                                <Link href="#" className="text-blue-600">View</Link>
                                            </td>
                                        )}
                                        {session.user.isAdmin && (
                                            <td className="p-4 align-middle">
                                                {/* Implement onClick handlers for these buttons */}
                                                {!item.userId ? (
                                                    <Link href={`/equipment/${item.id}/assign`} className="...">Add User</Link>
                                                ) : (
                                                    <button className="..." onClick={() => removeUser(item.id)}>Remove User</button>
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

    equipment = JSON.parse(JSON.stringify(equipment));

    return {
        props: { equipment },
    };
}