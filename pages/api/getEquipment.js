import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  let equipment;
  if (user.isAdmin) {
    equipment = await prisma.equipment.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });
  } else {
    equipment = await prisma.equipment.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  res.status(200).json({ equipment });
}