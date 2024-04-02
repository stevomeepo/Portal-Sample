import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]"; // Adjust the import path as necessary

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user.isAdmin) {
    return res.status(403).json({ message: "Access denied" });
  }

  // Ensure equipmentId and userId are integers
  const equipmentId = parseInt(req.body.equipmentId, 10);
  const userId = parseInt(req.body.userId, 10);

  // Validate the parsed integers
  if (isNaN(equipmentId) || isNaN(userId)) {
    return res.status(400).json({ message: "Equipment ID and User ID must be valid integers" });
  }

  try {
    const updatedEquipment = await prisma.equipment.update({
      where: { id: equipmentId },
      data: { userId: userId }, // userId is now an integer
      include: { user: true }, // this includes user
    });

    await prisma.equipmentHistory.create({
        data: {
          equipmentId: equipmentId,
          userId: userId,
          ownedFrom: new Date(), // Mark the start of ownership
        },
      });

    return res.status(200).json({
        ...updatedEquipment,
        userId: userId, // Ensure this is included in the response
    });
  } catch (error) {
    console.error("Failed to add user to equipment:", error);
    return res.status(500).json({ message: "Failed to add user to equipment" });
  }
}