function isValidName(name) {
  return typeof name == "string" && name.length >= 4;
}
function isUniqueNumericId(id, conductors) {
  return (
    typeof id === "number" &&
    !conductors.some((conductor) => conductor.id === id)
  );
}
function validateConductor(conductor, conductors) {
  const { name, licencia, id } = conductor;
  if (!isValidName(name)) {
    return {
      isValid: false,
      error: "El nombre debe tener al menos 3 caracteres",
    };
  }
  if (!isUniqueNumericId(id, conductors)) {
    return {
      isValid: false,
      error: "El id esta repetido y no es valido",
    };
  }
  return { isValid: true };
}
module.exports = {
  isValidName,
  isUniqueNumericId,
  validateConductor,
};
