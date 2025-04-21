const { PrismaClient } = require("@prisma/client");
const {
  createIpsService,
  getIpsService,
  updateIpsService,
  deleteIpsService,
  getIpsByIdService,
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
const getIpsById = async (req, res) => {
  const { id } = req.params;
  try {
    const ips = await getIpsByIdService(id);
    if (!ips) {
      return res.status(404).json({ message: "IPS not found" });
    }
    return res.status(200).json(ips);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteIps = async (req, res) => {
  const { id } = req.params;
  try {
    const ips = await deleteIpsService(id, prisma);
    return res.status(200).json(ips);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateIps = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const ips = await updateIpsService(id, data, prisma);
    return res.status(200).json(ips);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { createIps, getIps, getIpsById, deleteIps, updateIps };
