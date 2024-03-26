/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "EquipmentHistory" (
    "id" SERIAL NOT NULL,
    "equipmentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "ownedFrom" TIMESTAMP(3) NOT NULL,
    "ownedUntil" TIMESTAMP(3),

    CONSTRAINT "EquipmentHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EquipmentHistory" ADD CONSTRAINT "EquipmentHistory_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipmentHistory" ADD CONSTRAINT "EquipmentHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
