import { getSession } from "next-auth/react";
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  console.log("removeUser API called");
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getSession({ req });

  if (!session || !session.user || !session.user.isAdmin) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { equipmentId } = req.body;

  try {
    const updatedEquipment = await prisma.equipment.update({
      where: { id: parseInt(equipmentId) },
      data: { userId: null },
    });
    return res.status(200).json(updatedEquipment);
  } catch (error) {
    console.error("Error removing user from equipment:", error);
    return res.status(500).json({ message: "Failed to remove user from equipment", error: error.message });
  }
}