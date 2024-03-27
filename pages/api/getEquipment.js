import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Get the user session
  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Fetch equipment associated with the user
  const equipment = await prisma.equipment.findMany({
    where: {
      userId: session.user.id,
    },
  });

  res.status(200).json({ equipment });
}