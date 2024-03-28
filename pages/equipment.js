import { useSession, getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import Sidebar from '../components/Sidebar'; // Import Sidebar if you want it on this page as well
import Link from 'next/link';

const prisma = new PrismaClient();

export default function Equipment({ equipment }) {
    const { data: session } = useSession();

    if (!session) return <div>Access Denied</div>;

    return (
      <div>
        <h1 className="flex justify-center p-4">Your Equipment</h1>
        <div>
            <table className="table-auto w-1/3 mx-auto">
                <thead>
                    <tr>
                        <th className="px-2 py-1 border">Title</th>
                        <th className="px-2 py-1 border">Serial Number</th>
                        {session.user.isAdmin && <th className="px-2 py-1 border">Owner</th>}
                        {session.user.isAdmin && <th className="px-2 py-1 border">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                {equipment.map((item) => (
                    <tr key={item.id}>
                        <td className="border px-2 py-1 text-center">{item.title}</td>
                        <td className="border px-2 py-1 text-center">{item.description}</td>
                        {session.user.isAdmin && (
                            <td className="border px-2 py-1 text-center">
                                {item.user ? `${item.user.firstName} ${item.user.lastName}` : 'N/A'}
                            </td>
                        )}
                        {session.user.isAdmin && (
                            <td className="border px-2 py-1 text-center">
                                <Link className="px-4 py-2 bg-blue-500 text-white rounded" href={`/equipment/${item.id}`}>
                                    View
                                </Link>
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