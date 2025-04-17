// validateServicio.js
async function validateServicio(data, prisma) {
  const requiredFields = [
    "date",
    "status",
    "time_arrived",
    "time_finish",
    "code_start",
    "code_end",
    "place_accident",
    "nro_informe",
    "id_turno",
    "id_paciente",
  ];

  const missingFields = requiredFields.filter((field) => !data[field]);

  if (missingFields.length > 0) {
    return {
      isValid: false,
      errors: `Missing required fields: ${missingFields.join(", ")}`,
    };
  }

  const turno = await prisma.turnos.findUnique({
    where: { id: data.id_turno },
  });
  const paciente = await prisma.paciente.findUnique({
    where: { id: data.id_paciente },
  });

  if (!turno || !paciente) {
    return {
      isValid: false,
      errors: "Turno or paciente not found.",
    };
  }

  return { isValid: true };
}

module.exports = { validateServicio };
