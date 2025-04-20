async function ipsValidation(data, Prisma) {
  const { nombre, direccion } = data;
  if (nombre == null || direccion == null) {
    return { isValid: false, error: "All fields are required" };
  }
  if (typeof nombre !== "string" || typeof direccion !== "string") {
    return { isValid: false, error: "Invalid data type" };
  }

  return { isValid: true };
}
module.exports = ipsValidation;
