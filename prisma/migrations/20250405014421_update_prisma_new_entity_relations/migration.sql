/*
  Warnings:

  - You are about to drop the column `categoria` on the `Paramedico` table. All the data in the column will be lost.
  - You are about to drop the column `ambulanciaId` on the `Servicio` table. All the data in the column will be lost.
  - You are about to drop the column `conductorId` on the `Servicio` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `Servicio` table. All the data in the column will be lost.
  - You are about to drop the column `fin` on the `Servicio` table. All the data in the column will be lost.
  - You are about to drop the column `inicio` on the `Servicio` table. All the data in the column will be lost.
  - You are about to drop the column `pacienteId` on the `Servicio` table. All the data in the column will be lost.
  - You are about to drop the column `paramedicoId` on the `Servicio` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `ipsId` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the `IPS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Informe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Paciente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TiempoServicio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ubicacion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[document]` on the table `Paramedico` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_descripcion]` on the table `Servicio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[paramedicoId]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[auxiliarId]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `modelo` to the `Ambulancia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `Paramedico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_capacitation` to the `Paramedico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Paramedico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no_ci_medic` to the `Paramedico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_medic` to the `Paramedico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code_end` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code_start` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_descripcion` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_paciente` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_turno` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nro_informe` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `place_accident` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time_arrived` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time_finish` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identification` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rol` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDIENTE', 'COMPLETADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "TypeServicio" AS ENUM ('URGENCIA', 'EMERGENCIA', 'PROGRAMADO');

-- CreateEnum
CREATE TYPE "Typecomplicacion" AS ENUM ('RESPIRATORIA', 'CARDIOVASCULAR', 'TRAUMATISMO', 'NEUROLOGICO', 'TRAUMATICO', 'INFECCIOSO', 'OTRO', 'NO_APLICA');

-- CreateEnum
CREATE TYPE "TypeContext" AS ENUM ('CLINICO', 'OPERATIVO');

-- DropForeignKey
ALTER TABLE "Ambulancia" DROP CONSTRAINT "Ambulancia_ipsId_fkey";

-- DropForeignKey
ALTER TABLE "Informe" DROP CONSTRAINT "Informe_servicioId_fkey";

-- DropForeignKey
ALTER TABLE "Servicio" DROP CONSTRAINT "Servicio_ambulanciaId_fkey";

-- DropForeignKey
ALTER TABLE "Servicio" DROP CONSTRAINT "Servicio_conductorId_fkey";

-- DropForeignKey
ALTER TABLE "Servicio" DROP CONSTRAINT "Servicio_pacienteId_fkey";

-- DropForeignKey
ALTER TABLE "Servicio" DROP CONSTRAINT "Servicio_paramedicoId_fkey";

-- DropForeignKey
ALTER TABLE "TiempoServicio" DROP CONSTRAINT "TiempoServicio_servicioId_fkey";

-- DropForeignKey
ALTER TABLE "Ubicacion" DROP CONSTRAINT "Ubicacion_servicioId_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_ipsId_fkey";

-- DropIndex
DROP INDEX "Usuario_email_key";

-- AlterTable
ALTER TABLE "Ambulancia" ADD COLUMN     "modelo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Paramedico" DROP COLUMN "categoria",
ADD COLUMN     "document" TEXT NOT NULL,
ADD COLUMN     "id_capacitation" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "no_ci_medic" TEXT NOT NULL,
ADD COLUMN     "tipo_medic" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Servicio" DROP COLUMN "ambulanciaId",
DROP COLUMN "conductorId",
DROP COLUMN "estado",
DROP COLUMN "fin",
DROP COLUMN "inicio",
DROP COLUMN "pacienteId",
DROP COLUMN "paramedicoId",
ADD COLUMN     "code_end" TEXT NOT NULL,
ADD COLUMN     "code_start" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "id_descripcion" INTEGER NOT NULL,
ADD COLUMN     "id_paciente" INTEGER NOT NULL,
ADD COLUMN     "id_turno" INTEGER NOT NULL,
ADD COLUMN     "nro_informe" TEXT NOT NULL,
ADD COLUMN     "place_accident" TEXT NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL,
ADD COLUMN     "time_arrived" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "time_finish" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "email",
DROP COLUMN "ipsId",
DROP COLUMN "role",
ADD COLUMN     "auxiliarId" INTEGER,
ADD COLUMN     "identification" TEXT NOT NULL,
ADD COLUMN     "paramedicoId" INTEGER,
ADD COLUMN     "rol" "Role" NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- DropTable
DROP TABLE "IPS";

-- DropTable
DROP TABLE "Informe";

-- DropTable
DROP TABLE "Paciente";

-- DropTable
DROP TABLE "TiempoServicio";

-- DropTable
DROP TABLE "Ubicacion";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "EstadoServicio";

-- DropEnum
DROP TYPE "TipoUbicacion";

-- CreateTable
CREATE TABLE "Ips" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,

    CONSTRAINT "Ips_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Complicacion" (
    "id" SERIAL NOT NULL,
    "type" "Typecomplicacion" NOT NULL,
    "description" TEXT NOT NULL,
    "id_servicio" INTEGER NOT NULL,

    CONSTRAINT "Complicacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pacientes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "entidad_salud" TEXT NOT NULL,

    CONSTRAINT "Pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Descripcion" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "type_context" "TypeContext" NOT NULL,
    "implicados" TEXT NOT NULL,

    CONSTRAINT "Descripcion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turnos" (
    "id" SERIAL NOT NULL,
    "time_start" TIMESTAMP(3) NOT NULL,
    "time_end" TIMESTAMP(3) NOT NULL,
    "paramedicId" INTEGER NOT NULL,
    "auxiliarId" INTEGER NOT NULL,
    "conductorId" INTEGER NOT NULL,
    "ambulanciaId" INTEGER NOT NULL,

    CONSTRAINT "Turnos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conductor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "no_licencia" TEXT NOT NULL,
    "no_fast_driver" TEXT NOT NULL,

    CONSTRAINT "Conductor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auxiliar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "no_ci_auxiliar" TEXT NOT NULL,
    "no_ci_soporte_vital" TEXT NOT NULL,

    CONSTRAINT "Auxiliar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pacientes_document_key" ON "Pacientes"("document");

-- CreateIndex
CREATE UNIQUE INDEX "Conductor_document_key" ON "Conductor"("document");

-- CreateIndex
CREATE UNIQUE INDEX "Auxiliar_document_key" ON "Auxiliar"("document");

-- CreateIndex
CREATE UNIQUE INDEX "Paramedico_document_key" ON "Paramedico"("document");

-- CreateIndex
CREATE UNIQUE INDEX "Servicio_id_descripcion_key" ON "Servicio"("id_descripcion");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_paramedicoId_key" ON "Usuario"("paramedicoId");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_auxiliarId_key" ON "Usuario"("auxiliarId");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_paramedicoId_fkey" FOREIGN KEY ("paramedicoId") REFERENCES "Paramedico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_auxiliarId_fkey" FOREIGN KEY ("auxiliarId") REFERENCES "Auxiliar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ambulancia" ADD CONSTRAINT "Ambulancia_ipsId_fkey" FOREIGN KEY ("ipsId") REFERENCES "Ips"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_id_turno_fkey" FOREIGN KEY ("id_turno") REFERENCES "Turnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_id_descripcion_fkey" FOREIGN KEY ("id_descripcion") REFERENCES "Descripcion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complicacion" ADD CONSTRAINT "Complicacion_id_servicio_fkey" FOREIGN KEY ("id_servicio") REFERENCES "Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turnos" ADD CONSTRAINT "Turnos_paramedicId_fkey" FOREIGN KEY ("paramedicId") REFERENCES "Paramedico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turnos" ADD CONSTRAINT "Turnos_auxiliarId_fkey" FOREIGN KEY ("auxiliarId") REFERENCES "Auxiliar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turnos" ADD CONSTRAINT "Turnos_conductorId_fkey" FOREIGN KEY ("conductorId") REFERENCES "Conductor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turnos" ADD CONSTRAINT "Turnos_ambulanciaId_fkey" FOREIGN KEY ("ambulanciaId") REFERENCES "Ambulancia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
