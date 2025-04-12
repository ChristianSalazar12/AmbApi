const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const {
  createParamedicService,
  getParamedicService,
  deleteParamedicService,
  modificateParamedicService,
  getParamedicByIdService,
} = require("../services/adminService");
const { validateParamedico } = require("../utils/paramedicsValidation");

const createParamedic = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const data = req.body;
  const validation = await validateParamedico(data, Prisma);
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.error });
  }
  try {
    const newParamedic = await createParamedicService(
      data.name,
      data.last_name,
      data.document,
      data.tipo_medic,
      data.no_ci_medic,
      data.id_capacitation,
      data.password,
      data.role
    );
    return res.status(201).json(newParamedic);
  } catch (error) {
    console.log("Error creating paramedic:", error); // 👈
    return res.status(500).json({ error: error.message });
  }
};

const getParamedic = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    console.log("User role:", req.user.role); //
    //👈
    return res.status(403).json({ error: "Access Denied" });
  }

  try {
    const paramedics = await getParamedicService();
    return res.status(200).json(paramedics);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getParamedicById = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const { id } = req.params;
  try {
    const paramedic = await getParamedicByIdService(id);
    return res.status(200).json(paramedic);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const deleteParamedic = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const { id } = req.params;
  try {
    await deleteParamedicService(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const modificParamedic = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access Denied" });
  }
  const { id } = req.params;
  const {
    name,
    last_name,
    document,
    tipo_medic,
    no_ci_medic,
    id_capacitation,
  } = req.body;
  try {
    const updatedParamedic = await modificateParamedicService(id, {
      name,
      last_name,
      document,
      tipo_medic,
      no_ci_medic,
      id_capacitation,
    });
    return res.status(200).json(updatedParamedic);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createParamedic,
  getParamedic,
  deleteParamedic,
  modificParamedic,
  getParamedicById,
};
