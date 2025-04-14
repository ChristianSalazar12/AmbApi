const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createDriverService = async (
  name,
  last_name,
  document,
  no_licencia,
  no_fast_driver
) => {
  const newConductor = await prisma.conductor.create({
    data: {
      name,
      last_name,
      document,
      no_licencia,
      no_fast_driver,
    },
  });
  return newConductor;
};

const getDriverService = async () => {
  const drivers = await prisma.conductor.findMany();
  return drivers;
};

const getDriverByIdService = async (id) => {
  const driver = await prisma.conductor.findUnique({
    where: { id: parseInt(id) },
  });
  return driver;
};
const deleteDriverService = async (id) => {
  const deletedDriver = await prisma.conductor.delete({
    where: { id: parseInt(id) },
  });
  return deletedDriver;
};
const modificateDriverService = async (id, data) => {
  const updatedDriver = await prisma.conductor.update({
    where: { id: parseInt(id) },
    data: {
      name: data.name,
      last_name: data.last_name,
      no_licencia: data.no_licencia,
      no_fast_driver: data.no_fast_driver,
    },
  });
  return updatedDriver;
};
const getDriverByDocumentService = async (document) => {
  const driver = await prisma.conductor.findUnique({
    where: { document },
  });
  return driver;
};

module.exports = {
  createDriverService,
  getDriverService,
  getDriverByIdService,
  deleteDriverService,
  modificateDriverService,
  getDriverByDocumentService,
};
