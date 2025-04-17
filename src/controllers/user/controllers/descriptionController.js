const { PrismaClient } = require("@prisma/client");
const {
  createDescriptionService,
  getDescriptionService,
} = require("../../../services/descriptionService");
const { validateDescription } = require("../../../utils/descriptionValidation");
const { connect } = require("../../../../app");
const Prisma = new PrismaClient();

const createDescription = async (req, res) => {
  const data = req.body;
  const validation = await validateDescription(data, Prisma);
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.error });
  }
  try {
    const newDescription = await createDescriptionService(
      data.description,
      data.type_context,
      data.implicados,
      data.servicioId ? { connect: { id: data.servicioId } } : undefined
    );
    console.log("nuevaDescripcion fue", newDescription);
    return res.status(201).json(newDescription);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getDescription = async (req, res) => {
  try {
    const descriptions = await getDescriptionService();
    return res.status(200).json(descriptions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getDescriptionById = async (req, res) => {
  const { id } = req.params;
  try {
    const description = await Prisma.descripcion.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!description) {
      return res.status(404).json({ error: "Description not found" });
    }
    return res.status(200).json(description);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const deleteDescription = async (req, res) => {
  const { id } = req.params;
  try {
    const description = await Prisma.descripcion.delete({
      where: {
        id: Number(id),
      },
    });
    return res.status(204).json(description);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const modificDescription = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  try {
    const description = await Prisma.descripcion.update({
      where: {
        id: Number(id),
      },
      data: {
        description,
      },
    });
    return res.status(200).json(description);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createDescription,
  getDescription,
  getDescriptionById,
  deleteDescription,
  modificDescription,
};
