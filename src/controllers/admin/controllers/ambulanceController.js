const { PrismaClient } = require("@prisma/client");
const {
  createAmbulanceService,
  getAmbulanceService,
  getAmbulanceByIdService,
  deleteAmbulanceService,
} = require("../../../services/ambulanceService");
const ambulanceValidation = require("../../../utils/ambulanceValidation");
const Prisma = new PrismaClient();

const createAmbulance = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }

  const data = req.body;
  const validation = await ambulanceValidation(data, Prisma);
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.error });
  }
  try {
    const newAmbulance = await createAmbulanceService(
      data.modelo,
      data.placa,
      data.tipo,
      data.ipsId
    );
    return res.status(201).json(newAmbulance);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAmbulance = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  try {
    const ambulances = await getAmbulanceService();
    return res.status(200).json(ambulances);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAmbulanceById = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const { id } = req.params;
  try {
    const ambulance = await getAmbulanceByIdService(id);

    return res.status(200).json(ambulance);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const deleteAmbulance = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const { id } = req.params;
  try {
    const ambulance = await deleteAmbulanceService(id);
    return res.status(204).json(ambulance);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const modificAmbulance = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const { id } = req.params;
  const data = req.body;
  const validation = await ambulanceValidation(data, Prisma);
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.error });
  }
  try {
    const ambulance = await Prisma.ambulancia.update({
      where: { id: Number(id) },
      data: {
        modelo: data.modelo,
        placa: data.placa,
        tipo: data.tipo,
        ipsId: data.ipsId,
      },
    });
    return res.status(200).json(ambulance);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAmbulance,
  getAmbulance,
  getAmbulanceById,
  deleteAmbulance,
  modificAmbulance,
};
