const { PrismaClient } = require("@prisma/client");
const {
  getPatientService,
  createPatientService,
  getPatientByIdService,
  deletePatientService,
} = require("../../../services/patientService");
const { validatePatient } = require("../../../utils/patientValidation");

const Prisma = new PrismaClient();

const createPatient = async (req, res) => {
  const data = req.body;
  const validation = await validatePatient(data, Prisma);
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.error });
  }
  try {
    const newPatient = await createPatientService(data, Prisma);
    if (!newPatient) {
      return res.status(400).json({ error: "Failed to create patient" });
    }
    return res.status(201).json(newPatient);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getPatient = async (req, res) => {
  try {
    const patients = await getPatientService();
    return res.status(200).json(patients);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getPatientById = async (req, res) => {
  const { id } = req.params;
  console.log("Id recibido", id, typeof id);
  try {
    const patient = await getPatientByIdService(id);
    return res.status(200).json(patient);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletePatient = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPatient = await deletePatientService(id);
    return res.status(204).json(deletedPatient);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const modificPatient = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedPatient = await Prisma.patient.update({
      where: { id: Number(id) },
      data,
    });
    return res.status(200).json(updatedPatient);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createPatient,
  getPatient,
  getPatientById,
  deletePatient,
  modificPatient,
};
