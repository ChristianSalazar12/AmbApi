require("dotenv").config();
const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loggerMiddlewares = require("./src/middlewares/logger");
const errorHandler = require("./src/middlewares/errorHandler");
const { validateConductor } = require("./src/utils/driverValidation");
const { validateLoginData } = require("./src/utils/userValidarion");
const authenticateToken = require("./src/middlewares/auth");
const bodyParser = require("body-parser");

const fs = require("fs");
const path = require("path");
const { error } = require("console");
const { validateAmbulancia } = require("./src/utils/validationAmbulancia");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(loggerMiddlewares);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

//swagger por ahora

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Cats API",
      description: "The cats API description",
      version: "1.0.0",
    },
    tags: [{ name: "cats", description: "Everything about cats" }],
  },
  apis: ["app.js"], // Aquí pones la ruta donde están tus endpoints
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req, res) => {
  res.send(`BIENVENIDOS`);
});

app.get("/db-users", async (req, res) => {
  try {
    const users = await prisma.usuario.findMany();
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al comunicarse con la base de datos" });
  }
});
app.get("/protectedRoute", authenticateToken, (req, res) => {
  res.send("Esta es una ruta protegida");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const validation = await validateLoginData({ username, password }, prisma);
  if (!validation.isValid) {
    console.log("error fue", validation.error);
    return res.status(400).json({ message: validation.error });
  }

  try {
    const user = await prisma.usuario.findFirst({ where: { username } });
    console.log("user fue", user);
    if (!user) {
      return res.status(400).json({ error: "Usuario o contraseña inválida." });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Usuario o contraseña inválida." });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "4h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: "Error del servidor al iniciar sesión." });
  }
});

app.get("/ambulancias", async (req, res) => {
  try {
    const ambulancia = await prisma.ambulancia.findMany();
    res.json(ambulancia);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al comunicarse con la base de datos" });
  }
});

app.post("/ambulancias/add", async (req, res) => {
  const { modelo, placa, tipo, ipsId } = req.body;

  try {
    const validacion = await validateAmbulancia(
      { modelo, placa, tipo, ipsId },
      prisma
    );
    if (!validacion.isValid) {
      console.log("error fue", validacion.error);
      return res.status(400).json({ message: validacion.error });
    }

    const newAmbulancia = await prisma.ambulancia.create({
      data: {
        modelo,
        placa,
        tipo,
        ipsId,
      },
    });

    res.status(201).json({
      message: `Ambulancia con placa ${placa} registrada con éxito.`,
      ambulancia: newAmbulancia,
    });
  } catch (error) {
    console.error("Error al registrar ambulancia:", error);
    if (error.code === "P2002") {
      return res.status(409).json({ message: "La placa ya está registrada." });
    }
    res.status(500).json({ message: "Error del servidor", error });
  }
});

app.post("/drivers/add", async (req, res) => {
  try {
    const data = req.body;

    const validation = await validateConductor(data, prisma);
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.error });
    }

    const nuevoConductor = await prisma.conductor.create({
      data: {
        name: data.name,
        last_name: data.last_name,
        document: data.document,
        no_licencia: data.no_licencia,
        no_fast_driver: data.no_fast_driver,
      },
    });

    res.status(201).json(nuevoConductor);
  } catch (error) {
    console.error("Error al agregar conductor:", error);
    res
      .status(500)
      .json({ error: "Error interno al agregar conductor.", error });
  }
});

app.get("/drivers", async (req, res) => {
  try {
    const conductores = await prisma.conductor.findMany();
    res.json(conductores);
  } catch (error) {
    console.error("Error al obtener conductores:", error);
    res.status(500).json({ message: "Error interno del servidor.", error });
  }
});

app.delete("/drivers/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const conductor = await prisma.conductor.findUnique({
      where: { id: parseInt(id) },
    });
    if (!conductor) {
      return res.status(404).json({ message: "Conductor no encontrado." });
    }

    await prisma.conductor.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Conductor eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar conductor:", error);
    res.status(500).json({ message: "Error interno del servidor.", error });
  }
});
//paramdics

////////////

app.get("/error", (req, res, next) => {
  next(new Error("Error Fabricado"));
});

app.listen(PORT, () => {
  console.log(`server http://localhost:${PORT}`);
});
