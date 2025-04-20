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
module.exports = {
  createIpsService,
  getIpsService,
};
