/*
  Warnings:

  - Added the required column `usuarioId` to the `despesas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "despesas" ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "despesas" ADD CONSTRAINT "despesas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
