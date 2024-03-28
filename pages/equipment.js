import { useSession, getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import Sidebar from '../components/Sidebar';
import Link from 'next/link';

const prisma = new PrismaClient();

export default function Equipment({ equipment }) {
    const { data: session } = useSession();

    if (!session) return <div>Access Denied</div>;

    const headingText = session.user.isAdmin ? "Equipments" : "Your Equipments";

    return (
      <div>
        <h1 className="flex justify-center p-4">{headingText}</h1>
        <div>
            <table className="table-auto w-1/3 mx-auto">
                <thead>
                    <tr>
                        <th className="px-2 py-1 border">Title</th>
                        <th className="px-2 py-1 border">Serial Number</th>
                        {session.user.isAdmin && <th className="px-2 py-1 border">Owner</th>}
                        {session.user.isAdmin && <th className="px-2 py-1 border">History</th>}
                        {session.user.isAdmin && <th className="px-2 py-1 border">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                {equipment.map((item) => (
                    <tr key={item.id}>
                        <td className="border px-2 py-3 text-center">{item.title}</td>
                        <td className="border px-2 py-1 text-center">{item.description}</td>
                        {session.user.isAdmin && (
                            <td className="border px-2 py-1 text-center">
                                {item.user ? `${item.user.firstName} ${item.user.lastName}` : 'N/A'}
                            </td>
                        )}
                        {session.user.isAdmin && (
                            <td className="border px-3 py-1 text-center">
                                <Link className="text-purple-800 hover:text-purple-500 text-white font-bold px-2 py-1 rounded focus:outline-none focus:shadow-outline flex justify-center items-center relative" href={`/equipment/${item.id}`}>
                                    View
                                </Link>
                            </td>
                        )}
                        {session.user.isAdmin && (
                          <td className="border px-3 py-1 text-center">
                            <div className="flex justify-center space-x-2">
                              {!item.userId && (
                                <Link
                                  className="bg-green-600 hover:bg-green-500 text-white font-bold px-2 py-1 rounded focus:outline-none focus:shadow-outline whitespace-nowrap"
                                  href={`/equipment/${item.id}/assign`}
                                >
                                  Add User
                                </Link>
                              )}
                              {item.userId && (
                                // This button is a placeholder. Implement onClick to call your API for removing a user.
                                <button className="bg-red-600 hover:bg-red-500 text-white font-bold px-2 py-1 rounded focus:outline-none focus:shadow-outline whitespace-nowrap">
                                  Remove User
                                </button>
                              )}
                            </div>
                          </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
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