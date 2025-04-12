const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const register = async (name, last_name, document, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.paramedico.create({
    data: {
      name,
      last_name,
      document,
      password: hashedPassword,
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
    throw new Error("Invalid credentials");
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
module.exports = {
  register,
  login,
};
