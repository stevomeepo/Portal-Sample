import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { equipmentId } = req.query;

  try {
    const history = await prisma.equipmentHistory.findMany({
      where: { equipmentId: parseInt(equipmentId) },
      include: { user: true },
      orderBy: { ownedFrom: 'asc' },
    });

    res.status(200).json(history);
  } catch (error) {
    console.error("Error fetching equipment history:", error);
    res.status(500).json({ message: "Failed to fetch equipment history", error: error.message });
  }
}