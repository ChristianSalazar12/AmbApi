async function validatePatient(data, prisma) {
  const { name, last_name, document, entidad_salud } = data;
  if (!name || name.trim() === "")
    return { isValid: false, error: "El nombre es obligatorio." };
  if (!last_name || last_name.trim() === "")
    return { isValid: false, error: "El apellido es obligatorio." };
  if (!document || document.trim() === "")
    return { isValid: false, error: "El número de documento es obligatorio." };
  if (!entidad_salud || entidad_salud.trim() === "")
    return { isValid: false, error: "La entidad de salud es obligatoria." };
  const existingDoc = await prisma.pacientes.findUnique({
    where: { document },
  });
  if (existingDoc)
    return { isValid: false, error: "El documento ya está registrado." };
  return { isValid: true };
}
module.exports = { validatePatient };
