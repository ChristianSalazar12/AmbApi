const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createShiftService = async (
  time_start,
  time_end,
  paramedicId,
  auxiliarId,
  conductorId,
  ambulanciaId
) => {
  const newShift = await prisma.turnos.create({
    data: {
      time_start: new Date(time_start),
      time_end: new Date(time_end),
      paramedicId: parseInt(paramedicId),
      auxiliarId: parseInt(auxiliarId),
      conductorId: parseInt(conductorId),
      ambulanciaId: parseInt(ambulanciaId),
    },
  });
  return newShift;
};
const getShiftService = async () => {
  const shifts = await prisma.turnos.findMany();
  return shifts;
};
const getShiftByIdService = async (id) => {
  const shift = await prisma.turnos.findUnique({
    where: {
      id: Number(id),
    },
  });
  return shift;
};
const deleteShiftService = async (id) => {
  const shift = await prisma.turnos.delete({
    where: {
      id: Number(id),
    },
  });
  return shift;
};
const modificShiftService = async (id, data) => {
  const updatedShift = await prisma.turnos.update({
    where: {
      id: parseInt(id),
    },
    data: {
      time_start: new Date(data.time_start),
      time_end: new Date(data.time_end),
      paramedicId: parseInt(data.paramedicId),
      auxiliarId: parseInt(data.auxiliarId),
      conductorId: parseInt(data.conductorId),
      ambulanciaId: parseInt(data.ambulanciaId),
    },
  });
  return updatedShift;
};

module.exports = {
  createShiftService,
  getShiftService,
  getShiftByIdService,
  deleteShiftService,
  modificShiftService,
};
