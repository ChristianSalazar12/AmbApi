function isValidName(name) {
  return typeof name === "string" && name.length >= 4;
}

function isValidUsername(username) {
  return typeof username === "string" && username.trim().length >= 4;
}

function isValidIdentification(identification) {
  return typeof identification === "string" && /^\d{6,}$/.test(identification);
}

async function isUniqueUsername(username, prisma) {
  const user = await prisma.usuario.findUnique({
    where: { username },
  });
  return !user;
}

function isValidPassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}

async function validateUser(user, prisma) {
  const { name, username, password, identification } = user;

  if (!isValidName(name)) {
    return {
      isValid: false,
      error: "El nombre debe tener al menos 4 caracteres",
    };
  }

  if (!isValidUsername(username)) {
    return {
      isValid: false,
      error: "El nombre de usuario debe tener al menos 4 caracteres.",
    };
  }

  if (!isValidIdentification(identification)) {
    return {
      isValid: false,
      error: "La identificación debe tener al menos 6 dígitos numéricos.",
    };
  }

  if (!isValidPassword(password)) {
    return {
      isValid: false,
      error:
        "La contraseña debe tener al menos 8 caracteres y contener una letra y un número",
    };
  }
  return {
    isValid: true,
  };
}
async function validateLoginData({ username, password }) {
  if (!username || !password) {
    return {
      isValid: false,
      error: "Username y contraseña son requeridos.",
    };
  }

  if (typeof username !== "string" || typeof password !== "string") {
    return {
      isValid: false,
      error: "Datos inválidos en username o password.",
    };
  }

  // Puedes agregar validaciones adicionales si deseas
  return { isValid: true };
}

module.exports = {
  isValidName,
  isValidUsername,
  isValidIdentification,
  isUniqueUsername,
  isValidPassword,
  validateUser,
  validateLoginData,
};
