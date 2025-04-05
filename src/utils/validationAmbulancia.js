function validateData(ambulancia) {
  const { modelo, placa, tipo } = ambulancia;
  console.log("Validando datos de la ambulancia:", ambulancia);
  if (modelo.length < 4) {
    return {
      isValid: false,
      error: "El modelo debe tener al menos 4 caracteres",
    };
  }
  if (placa.length < 6) {
    return {
      isValid: false,
      error: "La placa debe tener al menos 6 caracteres",
    };
  }
  if (tipo.length < 3) {
    return {
      isValid: false,
      error: "El tipo debe tener al menos 3 caracteres",
    };
  }
  return { isValid: true };
}

async function validateExistsIps(ipsId, prisma) {
  const ips = await prisma.ips.findUnique({
    where: { id: ipsId },
  });

  if (!ips) {
    return {
      isValid: false,
      error: "La IPS asociada no existe.",
    };
  }

  return { isValid: true };
}

async function validateAmbulancia(ambulancia, prisma) {
  const { placa, ipsId } = ambulancia;

  const dataValidation = validateData({ ambulancia });
  if (!dataValidation.isValid) {
    return dataValidation;
  }

  const existsIps = await validateExistsIps(ipsId, prisma);
  if (!existsIps.isValid) {
    return existsIps;
  }

  const placaExists = await prisma.ambulancia.findUnique({
    where: { placa },
  });
  if (placaExists) {
    return {
      isValid: false,
      error: "Ya existe una ambulancia registrada con esa placa.",
    };
  }
  return { isValid: true };
}

module.exports = {
  validateData,
  validateExistsIps,

  validateAmbulancia,
};
