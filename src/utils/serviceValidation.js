async function validateServicio(servicio, prisma) {
  const errors = [];

  if (!servicio.date) {
    errors.push("Date is required");
  }

  if (!servicio.time_arrived) {
    errors.push("Time arrived is required");
  }

  if (!servicio.time_finish) {
    errors.push("Time finish is required");
  }

  if (!servicio.code_start) {
    errors.push("Code start is required");
  }

  if (!servicio.code_end) {
    errors.push("Code end is required");
  }

  if (!servicio.place_accident) {
    errors.push("Place accident is required");
  }

  if (!servicio.nro_informe) {
    errors.push("Nro informe is required");
  }

  if (!servicio.id_turno) {
    errors.push("Turno ID is required");
  }

  if (!servicio.id_paciente) {
    errors.push("Paciente ID is required");
  }

  if (!servicio.id_descripcion) {
    errors.push("Descripcion ID is required");
  }

  if (servicio.time_arrived > servicio.time_finish) {
    errors.push("Time arrived cannot be greater than time finish");
  }
  const existingService = await prisma.servicio.findFirst({
    where: {
      OR: [
        { code_start: servicio.code_start },
        { code_end: servicio.code_end },
      ],
    },
  });
  if (existingService) {
    errors.push("Code start or code end already exists");
  }

  const existingServiceByNroInforme = await prisma.servicio.findFirst({
    where: {
      nro_informe: servicio.nro_informe,
    },
  });
  if (existingServiceByNroInforme) {
    errors.push("Nro informe already exists");
  }

  const repeatedId_descripcion = await prisma.servicio.findFirst({
    where: {
      id_descripcion: servicio.id_descripcion,
    },
  });
  if (repeatedId_descripcion) {
    errors.push("Id descripcion already exists");
  }
  const thereIsTurno = await prisma.turnos.findUnique({
    where: {
      id: servicio.id_turno,
    },
  });
  if (!thereIsTurno) {
    errors.push("Turno not found");
  }
  const thereIsPaciente = await prisma.pacientes.findUnique({
    where: {
      id: servicio.id_paciente,
    },
  });
  if (!thereIsPaciente) {
    errors.push("Paciente not found");
  }
  const thereIsDescripcion = await prisma.descripcion.findUnique({
    where: {
      id: servicio.id_descripcion,
    },
  });
  if (!thereIsDescripcion) {
    errors.push("Descripcion not found");
  }

  return { isValid: errors.length === 0, errors };
}

module.exports = { validateServicio };
