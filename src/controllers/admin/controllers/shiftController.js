const { PrismaClient } = require("@prisma/client");
const {
  getShiftService,
  createShiftService,
  getShiftByIdService,
  deleteShiftService,
} = require("../../../services/shiftService");
const { validateShift } = require("../../../utils/shifts.validation");
const Prisma = new PrismaClient();

const createShift = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const data = req.body;
  const validation = await validateShift(data, Prisma);
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.error });
  }
  try {
    const newShift = await createShiftService(
      data.time_start,
      data.time_end,
      data.paramedicId,
      data.auxiliarId,
      data.conductorId,
      data.ambulanciaId
    );

    return res.status(201).json(newShift);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getShift = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  try {
    const shifts = await getShiftService();
    return res.status(200).json(shifts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getShiftById = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const { id } = req.params;
  try {
    const shift = await getShiftByIdService(id);
    if (!shift) {
      return res.status(404).json({ error: "Shift not found" });
    }
    return res.status(200).json(shift);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const deleteShift = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const { id } = req.params;
  try {
    const shift = await deleteShiftService(id);
    if (!shift) {
      return res.status(404).json({ error: "Shift not found" });
    }
    return res.status(204).json(shift);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const modificShift = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const { id } = req.params;
  const data = req.body;
  try {
    const shift = await Prisma.turnos.update({
      where: {
        id: Number(id),
      },
      data: {
        fecha_inicio: data.fecha_inicio,
        fecha_fin: data.fecha_fin,
        conductorId: data.conductorId,
        vehiculoId: data.vehiculoId,
        servicioId: data.servicioId,
      },
    });
    return res.status(200).json(shift);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createShift,
  getShift,
  getShiftById,
  deleteShift,
  modificShift,
};
