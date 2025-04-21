const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createIpsService = async (data, prisma) => {
  const { nombre, direccion } = data;
  try {
    const ips = await prisma.ips.create({
      data: {
        nombre,
        direccion,
      },
    });
    return ips;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getIpsService = async (req, res) => {
  try {
    const ips = await prisma.ips.findMany();
    return res.status(200).json(ips);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getIpsByIdService = async (id) => {
  try {
    const ips = await prisma.ips.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return ips;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteIpsService = async (id, prisma) => {
  try {
    const ips = await prisma.ips.delete({
      where: {
        id: Number(id),
      },
    });
    return ips;
  } catch (error) {
    throw new Error(error.message);
  }
};
const updateIpsService = async (id, data, prisma) => {
  const { nombre, direccion } = data;
  try {
    const ips = await prisma.ips.update({
      where: {
        id: Number(id),
      },
      data: {
        nombre,
        direccion,
      },
    });
    return ips;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = {
  createIpsService,
  getIpsService,
  deleteIpsService,
  updateIpsService,
  getIpsByIdService,
};
