function isValidName(name) {
  return typeof name === "string" && name.length >= 4;
}

async function isUniqueEmail(email, prisma) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return !user;
}

function isValidPassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}

async function validateUser(user, prisma) {
  const { name, email, password } = user;

  if (!isValidName(name)) {
    return {
      isValid: false,
      error: "El nombre debe tener al menos 4 caracteres",
    };
  }

  if (!isValidPassword(password)) {
    return {
      isValid: false,
      error:
        "La contraseña debe tener al menos 8 caracteres y contener una letra y un número",
    };
  }

  const emailIsUnique = await isUniqueEmail(email, prisma);
  if (!emailIsUnique) {
    return {
      isValid: false,
      error: "El correo electrónico ya está registrado",
    };
  }

  return { isValid: true };
}

module.exports = {
  isValidName,
  isUniqueEmail,
  isValidPassword,
  validateUser,
};
