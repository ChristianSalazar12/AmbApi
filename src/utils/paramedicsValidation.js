// src/validators/validateParamedico.js
async function validateParamedico(data, prisma) {
  const {
    name,
    last_name,
    document,
    tipo_medic,
    no_ci_medic,
    id_capacitation,
    password,
    role,
  } = data;

  if (!name || name.trim() === "")
    return { isValid: false, error: "El nombre es obligatorio." };
  if (!last_name || last_name.trim() === "")
    return { isValid: false, error: "El apellido es obligatorio." };
  if (!document || document.trim() === "")
    return { isValid: false, error: "El número de documento es obligatorio." };
  if (!tipo_medic || tipo_medic.trim() === "")
    return { isValid: false, error: "El tipo de médico es obligatorio." };
  if (!no_ci_medic || no_ci_medic.trim() === "")
    return { isValid: false, error: "El número de CI médico es obligatorio." };
  if (!id_capacitation || id_capacitation.trim() === "")
    return { isValid: false, error: "El ID de capacitación es obligatorio." };
  if (!password || password.trim() === "")
    return { isValid: false, error: "La contraseña es obligatoria." };
  if (!role || role.trim() === "")
    return { isValid: false, error: "El rol es obligatorio." };

  const existingDoc = await prisma.paramedico.findUnique({
    where: { document },
  });
  if (existingDoc)
    return { isValid: false, error: "El documento ya está registrado." };

  return { isValid: true };
}

module.exports = { validateParamedico };
