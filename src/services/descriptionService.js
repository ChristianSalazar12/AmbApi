const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createDescriptionService = async (
  description,
  type_context,
  implicados
) => {
  const newDescription = await prisma.descripcion.create({
    data: {
      description,
      type_context,
      implicados,
    },
  });
  return newDescription;
};

const getDescriptionService = async () => {
  const descriptions = await prisma.descripcion.findMany();
  return descriptions;
};
const getDescriptionByIdService = async (id) => {
  const description = await prisma.descripcion.findUnique({
    where: { id: parseInt(id) },
  });
  return description;
};
const deleteDescriptionService = async (id) => {
  const deletedDescription = await prisma.descripcion.delete({
    where: { id: parseInt(id) },
  });
  return deletedDescription;
};
const modificateDescriptionService = async (id, data) => {
  const updatedDescription = await prisma.descripcion.update({
    where: { id: parseInt(id) },
    data: {
      description: data.description,
    },
  });
  return updatedDescription;
};
module.exports = {
  createDescriptionService,
  getDescriptionService,
  getDescriptionByIdService,
  deleteDescriptionService,
  modificateDescriptionService,
};
