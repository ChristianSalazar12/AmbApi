async function validateDescription(data, prisma) {
  const { description, type_context, implicados } = data;

  if (!description || description.trim() === "") {
    console.log("description", description);
    return { isValid: false, error: "La descripción es obligatoria." };
  }

  if (!type_context || type_context.trim() === "") {
    return { isValid: false, error: "El tipo de contexto es obligatorio." };
  }

  if (!implicados || implicados.trim() === "") {
    return { isValid: false, error: "Los implicados son obligatorios." };
  }

  return { isValid: true };
}

module.exports = { validateDescription };
