import { getSession } from "next-auth/react";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
    });

    return {
        props: { user: JSON.parse(JSON.stringify(user)) },
    };
}

const Profile = ({ user }) => {
    return (
        <>
            <div className="bg-gray-50/70 py-12 w-full">
                <div className="container mx-auto px-4 flex flex-col gap-4 md:gap-8 items-center text-center md:flex-row md:justify-center lg:gap-12 xl:gap-16">
                    <div className="grid gap-2" style={{ paddingTop: '2rem' }}> {/* Adjust the padding value as needed */}
                        <div className="space-y-2">
                            <h1 className="text-3xl pb-4 font-bold tracking-tighter sm:text-5xl">{user.firstName} {user.lastName}</h1>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
                            <div className="grid gap-1">
                                <h2 className="text-lg font-semibold">Contact</h2>
                                <div className="grid gap-0.5 text-sm text-gray-500 dark:text-gray-400">
                                    <p>Email: {user.email}</p>
                                </div>
                            </div>
                            <div className="grid gap-1">
                                <h2 className="text-lg font-semibold">Position</h2>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    <p>{user.position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-12 space-y-12 px-4 md:px-6">
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <h2 className="text-xl font-semibold">Bio</h2>
                    </div>
                    <div className="grid gap-2">
                        <h2 className="text-xl font-semibold">Department</h2>
                        <p className="text-gray-500 dark:text-gray-400">{user.department}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;