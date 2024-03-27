import { useSession, getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Equipment({ equipment }) {
    const { data: session, status } = useSession();

    if (!session) return <div>Access Denied</div>;

  return (
    <div>
        <h1>Your Equipment</h1>
            <ul>
            {equipment.map((item) => (
                <li key={item.id}>{item.title}: {item.description}</li>
            ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  console.log("Session User ID:", session?.user?.id);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const equipment = await prisma.equipment.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return {
    props: { equipment },
  };
}