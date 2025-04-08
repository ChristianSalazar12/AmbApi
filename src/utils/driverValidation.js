async function validateConductor(data, prisma) {
  const { name, last_name, document, no_licencia, no_fast_driver } = data;

  if (!name || name.trim() === "")
    return { isValid: false, error: "El nombre es obligatorio." };
  if (!last_name || last_name.trim() === "")
    return { isValid: false, error: "El apellido es obligatorio." };
  if (!document || document.trim() === "")
    return { isValid: false, error: "El número de documento es obligatorio." };
  if (!no_licencia || no_licencia.trim() === "")
    return { isValid: false, error: "El número de licencia es obligatorio." };
  if (!no_fast_driver || no_fast_driver.trim() === "")
    return { isValid: false, error: "El número FAST DRIVER es obligatorio." };

  const existingDoc = await prisma.conductor.findUnique({
    where: { document },
  });
  if (existingDoc)
    return { isValid: false, error: "El documento ya está registrado." };

  const existingLic = await prisma.conductor.findFirst({
    where: { no_licencia },
  });
  if (existingLic)
    return {
      isValid: false,
      error: "El número de licencia ya está registrado.",
    };

  const existingFast = await prisma.conductor.findFirst({
    where: { no_fast_driver },
  });
  if (existingFast)
    return {
      isValid: false,
      error: "El número FAST DRIVER ya está registrado.",
    };

  return { isValid: true };
}

module.exports = { validateConductor };
