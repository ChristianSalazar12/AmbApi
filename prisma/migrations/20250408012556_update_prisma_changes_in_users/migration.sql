/*
  Warnings:

  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `Auxiliar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Auxiliar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Paramedico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Paramedico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_auxiliarId_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_paramedicoId_fkey";

-- AlterTable
ALTER TABLE "Auxiliar" ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL;

-- AlterTable
ALTER TABLE "Paramedico" ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL;

-- DropTable
DROP TABLE "Usuario";
