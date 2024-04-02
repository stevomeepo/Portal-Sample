import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]"; // Adjust the import path as necessary

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getServerSession(req, res, authOptions);

  // Check if the user is authenticated and is an admin
  if (!session || !session.user.isAdmin) {
    return res.status(403).json({ message: "Access denied" });
  }

  const { equipmentId } = req.body;

  // Validate equipmentId
  if (!equipmentId) {
    return res.status(400).json({ message: "Equipment ID is required" });
  }

  try {
    // Update the equipment to remove the user
    const updatedEquipment = await prisma.equipment.update({
      where: {
        id: equipmentId,
      },
      data: {
        userId: null, // Remove the user from the equipment
      },
    });

    await prisma.equipmentHistory.updateMany({
      where: {
        equipmentId: equipmentId,
        ownedUntil: null, // Find the current ownership record
      },
      data: {
        ownedUntil: new Date(), // Mark the end of ownership
      },
    });

    // Respond with the updated equipment data
    return res.status(200).json(updatedEquipment);
  } catch (error) {
    console.error("Failed to remove user from equipment:", error);
    return res.status(500).json({ message: "Failed to remove user from equipment" });
  }
}