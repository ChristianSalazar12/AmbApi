const { PrismaClient } = require("@prisma/client");
const {
  createIpsService,
  getIpsService,
} = require("../../../services/ipsService");
const ipsValidation = require("../../../utils/ipsValidation");
const prisma = new PrismaClient();

const createIps = async (req, res) => {
  const data = req.body;
  try {
    const ips = await createIpsService(data, prisma);
    return res.status(201).json(ips);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getIps = async (req, res) => {
  try {
    const ips = await getIpsService();
    return res.status(200).json(ips);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { createIps, getIps };
