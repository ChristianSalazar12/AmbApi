const { PrismaClient } = require("@prisma/client");
const {
  createAttentionService,
  getAttentionService,
} = require("../../../services/attentionService");

const { validateServicio } = require("../../../utils/serviceValidation");
const prisma = new PrismaClient();

const createService = async (req, res) => {
  const data = req.body;
  console.log("Data received", data);
  const validation = await validateServicio(data, prisma);
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.errors });
  }
  try {
    const newService = await createAttentionService(
      prisma,
      data.date,
      data.status,
      data.time_arrived,
      data.time_finish,
      data.code_start,
      data.code_end,
      data.place_accident,
      data.nro_informe,
      data.id_turno,
      data.id_paciente,
      data.id_descripcion
    );
    console.log("New service created", newService);

    return res.status(201).json(newService);
  } catch (error) {
    console.error("Error creating service controller:", error);
    res.status(500).json({ error: error.message });
  }
};

const getService = async (req, res) => {
  const data = req.body;
  console.log("Data received", data);
  try {
    const services = await getAttentionService();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createService,
  getService,
};
