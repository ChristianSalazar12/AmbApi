const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const {
  createDriverService,
  getDriverService,
  getDriverByIdService,
  deleteDriverService,
  modificateDriverService,
} = require("../../../services/driverService");
const { validateConductor } = require("../../../utils/driverValidation");

const createDriver = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const data = req.body;
  const validation = await validateConductor(data, Prisma);
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.error });
  }
  try {
    const newDriver = await createDriverService(
      data.name,
      data.last_name,
      data.document,
      data.no_licencia,
      data.no_fast_driver
    );
    return res.status(201).json(newDriver);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getDriver = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  try {
    const drivers = await getDriverService();
    return res.status(200).json(drivers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getDriverById = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const { id } = req.params;
  try {
    const driver = await getDriverByIdService(id);
    return res.status(200).json(driver);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const deleteDriver = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const { id } = req.params;
  try {
    await deleteDriverService(id);
    return res.status(204).json({ message: "Driver deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const modificDriver = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const { id } = req.params;
  const { name, last_name, document, no_licencia, no_fast_driver } = req.body;
  try {
    const updatedDriver = await modificateDriverService(id, {
      name,
      last_name,
      document,
      no_licencia,
      no_fast_driver,
    });
    return res.status(200).json(updatedDriver);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDriver,
  getDriver,
  getDriverById,
  deleteDriver,
  modificDriver,
};
