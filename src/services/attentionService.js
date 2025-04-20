const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createAttentionService = async (
  prisma,
  date,
  status,
  time_arrived,
  time_finish,
  code_start,
  code_end,
  place_accident,
  nro_informe,
  id_turno,
  id_paciente,
  id_descripcion
) => {
  const newService = await prisma.servicio.create({
    data: {
      date,
      status,
      time_arrived,
      time_finish,
      code_start,
      code_end,
      place_accident,
      nro_informe,
      id_turno,
      id_paciente,
      id_descripcion,
    },
  });
  return newService;
};

const getAttentionService = async () => {
  const services = await prisma.servicio.findMany({
    include: {
      paciente: true,
      descripcion: true,
      turno: true,
    },
  });
  return services;
};

const getServiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await prisma.servicio.findUnique({
      where: { id: Number(id) },
    });
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await prisma.service.delete({
      where: { id: Number(id) },
    });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const modificService = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const service = await prisma.service.update({
      where: { id: Number(id) },
      data: {
        name,
        description,
      },
    });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createAttentionService,
  getAttentionService,
  getServiceById,
  deleteService,
  modificService,
};
