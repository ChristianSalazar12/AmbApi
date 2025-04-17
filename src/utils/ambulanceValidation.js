async function ambulanceValidation(data, Prisma) {
  console.log("Validating ambulance data:", data);
  const { modelo, placa, tipo, ipsId } = data;
  if (!modelo || !placa || !tipo || !ipsId) {
    return { isValid: false, error: "All fields are required" };
  }
  if (
    typeof modelo !== "string" ||
    typeof placa !== "string" ||
    typeof tipo !== "string" ||
    typeof ipsId !== "number"
  ) {
    return { isValid: false, error: "Invalid data type" };
  }
  const placarepetido = await Prisma.ambulancia.findUnique({
    where: {
      placa: placa,
    },
  });
  if (placarepetido) {
    return { isValid: false, error: "Plate already exists" };
  }
  return { isValid: true };
}

module.exports = ambulanceValidation;
