import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
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
      where: { id: equipmentId },
      data: { userId: null },
    });
    return res.status(200).json(updatedEquipment);
  } catch (error) {
    return res.status(500).json({ message: "Failed to unassign equipment", error: error.message });
  }
}