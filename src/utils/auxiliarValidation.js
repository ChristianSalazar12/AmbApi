async function validateAuxiliar(data, prisma) {
    const {
      name,
      last_name,
      document,
      no_ci_auxiliar,
      no_ci_soporte_vital,
      password,
    } = data;
  
    if (!name || name.trim() === "")
      return { isValid: false, error: "El nombre es obligatorio." };
    if (!last_name || last_name.trim() === "")
      return { isValid: false, error: "El apellido es obligatorio." };
    if (!document || document.trim() === "")
      return { isValid: false, error: "El número de documento es obligatorio." };
    if (!no_ci_auxiliar || no_ci_auxiliar.trim() === "")
      return { isValid: false, error: "El número de CI auxiliar es obligatorio." };
    if (!no_ci_soporte_vital || no_ci_soporte_vital.trim() === "")
      return { isValid: false, error: "El número de CI soporte vital es obligatorio." };
    if (!password || password.trim() === "")
      return { isValid: false, error: "La contraseña es obligatoria." };
  
    const existingDoc = await prisma.auxiliar.findUnique({
      where: { document },
    });
    if (existingDoc)
      return { isValid: false, error: "El documento ya está registrado." };
  
    return { isValid: true };
  }
  
  module.exports = { validateAuxiliar };
  