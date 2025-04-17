const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const createAmbulanceService = async (modelo, placa, tipo, ipsId) => {
  try {
    const newAmbulance = await Prisma.ambulancia.create({
      data: {
        modelo,
        placa,
        tipo,
        ipsId,
      },
    });
    return newAmbulance;
  } catch (error) {
    throw new Error("Error creating ambulance: " + error.message);
  }
};
const getAmbulanceService = async () => {
  try {
    const ambulances = await Prisma.ambulancia.findMany();
    return ambulances;
  } catch (error) {
    throw new Error("Error fetching ambulances: " + error.message);
  }
};
const getAmbulanceByIdService = async (id) => {
  try {
    const ambulance = await Prisma.ambulancia.findUnique({
      where: { id: parseInt(id) },
    });
    if (!ambulance) {
      throw new Error("Ambulance not found");
    }
    return ambulance;
  } catch (error) {
    throw new Error("Error fetching ambulance: " + error.message);
  }
};
const deleteAmbulanceService = async (id) => {
  try {
    const ambulance = await Prisma.ambulancia.delete({
      where: { id: parseInt(id) },
    });
    return ambulance;
  } catch (error) {
    throw new Error("Error deleting ambulance: " + error.message);
  }
};
const modificAmbulanceService = async (id, data) => {
  try {
    const ambulance = await Prisma.ambulancia.update({
      where: { id: parseInt(id) },
      data,
    });
    return ambulance;
  } catch (error) {
    throw new Error("Error updating ambulance: " + error.message);
  }
};

module.exports = {
  createAmbulanceService,
  getAmbulanceService,
  getAmbulanceByIdService,
  deleteAmbulanceService,
  modificAmbulanceService,
};
