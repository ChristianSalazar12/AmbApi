async function validateDescripcion(data, prisma) {
  const { description, type_context, implicados, servicioId } = data;

  if (!description || description.trim() === "") {
    return { isValid: false, error: "La descripción es obligatoria." };
  }

  if (!type_context || type_context.trim() === "") {
    return { isValid: false, error: "El tipo de contexto es obligatorio." };
  }

  if (!implicados || implicados.trim() === "") {
    return { isValid: false, error: "Los implicados son obligatorios." };
  }

  if (!servicioId) {
    return { isValid: false, error: "Se requiere el ID del servicio." };
  }

  const servicio = await prisma.servicio.findUnique({
    where: { id: servicioId },
  });
  if (!servicio) {
    return { isValid: false, error: "El servicio no existe." };
  }

  if (servicio.id_descripcion) {
    return {
      isValid: false,
      error: "Este servicio ya tiene una descripción asociada.",
    };
  }

  return { isValid: true };
}

module.exports = { validateDescripcion };
