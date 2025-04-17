async function validateComplication(data, prisma) {
  const { type, description, id_servicio } = data;

  if (!type || type.trim() === "") {
    return { isValid: false, error: "El tipo de complicación es obligatorio." };
  }

  if (!description || description.trim() === "") {
    return { isValid: false, error: "La descripción es obligatoria." };
  }

  if (!id_servicio) {
    return { isValid: false, error: "El ID del servicio es obligatorio." };
  }

  const servicio = await prisma.servicio.findUnique({
    where: { id: parseInt(id_servicio) },
  });

  if (!servicio) {
    return { isValid: false, error: "El servicio especificado no existe." };
  }

  return { isValid: true };
}

module.exports = { validateComplication };
