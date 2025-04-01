-- CreateEnum
CREATE TYPE "EstadoServicio" AS ENUM ('EN_CURSO', 'FINALIZADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "TipoUbicacion" AS ENUM ('ACCIDENTE', 'HOSPITAL');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fuction" TEXT NOT NULL DEFAULT 'No especificado';

-- CreateTable
CREATE TABLE "IPS" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "IPS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ambulancia" (
    "id" SERIAL NOT NULL,
    "placa" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "ipsId" INTEGER NOT NULL,

    CONSTRAINT "Ambulancia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "ipsId" INTEGER,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servicio" (
    "id" SERIAL NOT NULL,
    "ambulanciaId" INTEGER NOT NULL,
    "conductorId" INTEGER NOT NULL,
    "paramedicoId" INTEGER NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "estado" "EstadoServicio" NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fin" TIMESTAMP(3),

    CONSTRAINT "Servicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TiempoServicio" (
    "id" SERIAL NOT NULL,
    "servicioId" INTEGER NOT NULL,
    "evento" TEXT NOT NULL,
    "tiempo" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TiempoServicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Informe" (
    "id" SERIAL NOT NULL,
    "servicioId" INTEGER NOT NULL,
    "observaciones" TEXT,
    "aprobado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Informe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ubicacion" (
    "id" SERIAL NOT NULL,
    "direccion" TEXT NOT NULL,
    "tipo" "TipoUbicacion" NOT NULL,
    "servicioId" INTEGER NOT NULL,

    CONSTRAINT "Ubicacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paramedico" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Paramedico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IPS_nombre_key" ON "IPS"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Ambulancia_placa_key" ON "Ambulancia"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_documento_key" ON "Paciente"("documento");

-- CreateIndex
CREATE UNIQUE INDEX "Informe_servicioId_key" ON "Informe"("servicioId");

-- AddForeignKey
ALTER TABLE "Ambulancia" ADD CONSTRAINT "Ambulancia_ipsId_fkey" FOREIGN KEY ("ipsId") REFERENCES "IPS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_ipsId_fkey" FOREIGN KEY ("ipsId") REFERENCES "IPS"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_ambulanciaId_fkey" FOREIGN KEY ("ambulanciaId") REFERENCES "Ambulancia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_conductorId_fkey" FOREIGN KEY ("conductorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_paramedicoId_fkey" FOREIGN KEY ("paramedicoId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TiempoServicio" ADD CONSTRAINT "TiempoServicio_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Informe" ADD CONSTRAINT "Informe_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ubicacion" ADD CONSTRAINT "Ubicacion_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
