const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

const createParamedicService = async (
  name,
  last_name,
  document,
  tipo_medic,
  no_ci_medic,
  id_capacitation,
  password
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newParamedic = await prisma.paramedico.create({
    data: {
      name,
      last_name,
      document,
      tipo_medic,
      no_ci_medic,
      id_capacitation,
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  return newParamedic;
};
const getParamedicService = async () => {
  const paramedics = await prisma.paramedico.findMany();
  return paramedics;
};
const deleteParamedicService = async (id) => {
  const deletedParamedic = await prisma.paramedico.delete({
    where: { id: parseInt(id) },
  });
  return deletedParamedic;
};
const modificateParamedicService = async (id, data) => {
  const updatedParamedic = await prisma.paramedico.update({
    where: { id: parseInt(id) },
    data: {
      name: data.name,
      last_name: data.last_name,
      tipo_medic: data.tipo_medic,
      no_ci_medic: data.no_ci_medic,
      id_capacitation: data.id_capacitation,
      password: data.password,
    },
  });
  return updatedParamedic;
};
const getParamedicByIdService = async (id) => {
  const paramedic = await prisma.paramedico.findUnique({
    where: { id: parseInt(id) },
  });
  return paramedic;
};

const createAssistantService = async (
  name,
  last_name,
  document,
  no_ci_auxiliar,
  no_ci_soporte_vital,
  password
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newAssistant = await prisma.auxiliar.create({
    data: {
      name,
      last_name,
      document,
      no_ci_auxiliar,
      no_ci_soporte_vital,
      password: hashedPassword,
      role: "USER",
    },
  });

  return newAssistant;
};
const getAssistantService = async () => {
  const assistants = await prisma.auxiliar.findMany();
  return assistants;
};
const getAssistantByIdService = async (id) => {
  const assistant = await prisma.auxiliar.findUnique({
    where: { id: parseInt(id) },
  });
  return assistant;
};
const deleteAssistantService = async (id) => {
  const deletedAssistant = await prisma.auxiliar.delete({
    where: { id: parseInt(id) },
  });
  return deletedAssistant;
};
const modificateAssistantService = async (id, data) => {
  const updatedAssistant = await prisma.auxiliar.update({
    where: { id: parseInt(id) },
    data: {
      name: data.name,
      last_name: data.last_name,
      no_ci_auxiliar: data.no_ci_auxiliar,
      no_ci_soporte_vital: data.no_ci_soporte_vital,
      password: data.password,
    },
  });
  return updatedAssistant;
};

module.exports = {
  createParamedicService,
  getParamedicService,
  deleteParamedicService,
  modificateParamedicService,
  getParamedicByIdService,
  createAssistantService,
  getAssistantService,
  getAssistantByIdService,
  deleteAssistantService,
  modificateAssistantService,
};
