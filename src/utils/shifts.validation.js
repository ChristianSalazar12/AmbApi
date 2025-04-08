async function validateTurno(data, prisma) {
  const {
    time_start,
    time_end,
    paramedicId,
    auxiliarId,
    conductorId,
    ambulanciaId,
  } = data;

  if (!time_start)
    return { isValid: false, error: "La hora de inicio es obligatoria." };
  if (!time_end)
    return { isValid: false, error: "La hora de finalización es obligatoria." };
  if (!paramedicId)
    return { isValid: false, error: "El ID del paramédico es obligatorio." };
  if (!auxiliarId)
    return { isValid: false, error: "El ID del auxiliar es obligatorio." };
  if (!conductorId)
    return { isValid: false, error: "El ID del conductor es obligatorio." };
  if (!ambulanciaId)
    return { isValid: false, error: "El ID de la ambulancia es obligatorio." };

  // Verifica existencia en la base de datos
  const paramedico = await prisma.paramedico.findUnique({
    where: { id: paramedicId },
  });
  if (!paramedico) return { isValid: false, error: "El paramédico no existe." };

  const auxiliar = await prisma.auxiliar.findUnique({
    where: { id: auxiliarId },
  });
  if (!auxiliar) return { isValid: false, error: "El auxiliar no existe." };

  const conductor = await prisma.conductor.findUnique({
    where: { id: conductorId },
  });
  if (!conductor) return { isValid: false, error: "El conductor no existe." };

  const ambulancia = await prisma.ambulancia.findUnique({
    where: { id: ambulanciaId },
  });
  if (!ambulancia) return { isValid: false, error: "La ambulancia no existe." };

  return { isValid: true };
}

module.exports = { validateTurno };
