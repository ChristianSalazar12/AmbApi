const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

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
    where: { id },
  });
  return deletedParamedic;
};
const modificateParamedicService = async (id, data) => {
  const updatedParamedic = await prisma.paramedic.update({
    where: { id },
    data,
  });
  return updatedParamedic;
};
const getParamedicByIdService = async (id) => {
  const paramedic = await prisma.paramedic.findUnique({
    where: { id },
  });
  return paramedic;
};
module.exports = {
  createParamedicService,
  getParamedicService,
  deleteParamedicService,
  modificateParamedicService,
  getParamedicByIdService,
};
