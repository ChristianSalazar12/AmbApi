const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

const register = async (
  name,
  last_name,
  document,
  tipo_medic,
  no_ci_medic,
  id_capacitation,
  password
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.paramedico.create({
    data: {
      name,
      last_name,
      document,
      tipo_medic,
      no_ci_medic,
      id_capacitation,
      password: hashedPassword,
      role: "USER",
    },
  });
  return newUser;
};
const login = async (document, password) => {
  const user = await prisma.paramedico.findUnique({
    where: { document },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials here");
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );

  return token;
};

const getAllUsers = async () => {
  const users = await prisma.paramedico.findMany();
  return users;
};

module.exports = {
  register,
  login,
  getAllUsers,
};
