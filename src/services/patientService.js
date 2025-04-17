const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const createPatientService = async (data, Prisma) => {
  try {
    const newPatient = await Prisma.pacientes.create({
      data,
    });
    return newPatient;
  } catch (error) {
    throw new Error("Error creating patient: " + error.message);
  }
};
const getPatientService = async () => {
  try {
    const patients = await Prisma.pacientes.findMany();
    return patients;
  } catch (error) {
    throw new Error("Error fetching patients: " + error.message);
  }
};
const getPatientByIdService = async (id) => {
  const patient = await Prisma.pacientes.findUnique({
    where: { id: parseInt(id) },
  });
  return patient;
};
const deletePatientService = async (id) => {
  const deletedPatient = await Prisma.pacientes.delete({
    where: { id: parseInt(id) },
  });
  return deletedPatient;
};

module.exports = {
  createPatientService,
  getPatientService,
  getPatientByIdService,
  deletePatientService,
};
