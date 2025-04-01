require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loggerMiddlewares = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const { validateConductor, validateParamedic } = require("./utils/validation");
const { validateUser } = require("./utils/userValidarion");
const authenticateToken = require("./middlewares/auth");
const bodyParser = require("body-parser");

const fs = require("fs");
const path = require("path");
const { error } = require("console");
const userFilePath = path.join(__dirname, "users.json");
const paramedicsFilePath = path.join(__dirname, "paramedics.json");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(loggerMiddlewares);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`BIENVENIDOS`);
});
app.get("/ambulancias", (req, res) => {
  res.json({
    ambulancias: [
      { id: 1, placa: "ABC123", estad: "Disponible" },
      { id: 2, placa: "AXC123", estad: "En servicio" },
    ],
  });
});
app.get("/ambulancia/:id", (req, res) => {
  const id = req.params.id;
  res.json({ id, placa: "ABC123", estado: "Disponible" });
});
app.delete("/ambulancia/:id", (req, res) => {
  const id = req.params.id;
});

app.post("/servicios", (req, res) => {
  const { ambulanciaId, paciente, hospital } = req.body;
  if (!ambulanciaId || !paciente || !hospital) {
    return res.status(400).json({ error: "Datos Incompletos" });
  }
  res.status(201).json({
    menssage: "Servicio registrado",
    servicio: { ambulanciaId, paciente, hospital, estado: "En curso" },
  });
});

app.get("/servicios/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    id,
    ambulanciaId: 1,
    paciente: "Juan macro",
    hospital: "San pedro",
    estado: "Finalizado",
  });
});

app.post("/servicio/:id/tiempos", (req, res) => {
  const id = req.params.id;
  const { tiempoReaccion, tiempoTraslado } = req.body;
  if (!tiempoReaccion || !tiempoTraslado) {
    return res.status(400).json({ error: "Falta datos de tiempo" });
  }
  res.json({
    menssage: "Tiempo Registrado",
    data: {
      servicioId: id,
      tiempoReaccion,
      tiempoTraslado,
    },
  });
});
//aparatado Conductores
app.post("/conductors", (req, res) => {
  const newConductor = req.body;

  fs.readFile(userFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error con la conexion de datos" });
    }
    const conductors = JSON.parse(data);
    const validation = validateConductor(newConductor, conductors);
    if (!validation.isValid) {
      return res.status(400).json({ error: validation.error });
    }

    conductors.push(newConductor);

    fs.writeFile(userFilePath, JSON.stringify(conductors, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error al guardar el usuario" });
      }
      res.status(201).json(newConductor);
    });
  });
});

app.get("/conductors", (req, res) => {
  fs.readFile(userFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error con la conexion de datos" });
    }
    const conductors = JSON.parse(data);
    res.status(201).json(conductors);
  });
});

app.get("/conductor/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, nombre: "Carlos Perez", licencia: "ABC123" });
});

app.put("/conductor/:id", (req, res) => {
  const updatedConductor = req.body;
  fs.readFile(userFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error con la conexion de datos" });
    }
    let conductors = JSON.parse(data);

    const validation = validateConductor(updatedConductor, conductors);
    if (!validation.isValid) {
      return res.status(400).json({ error: validation.error });
    }

    conductors = conductors.map((conductor) =>
      conductor.id === conductorId
        ? { ...conductor, ...updatedConductor }
        : conductor
    );
    fs.writeFile(userFilePath, JSON.stringify(conductors, null, 2), (err) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Error con la conexion de datos" });
      }
      res.json(updatedConductor);
    });
  });
});

app.delete("/conductor/:id", (req, res) => {
  const conductorId = parseInt(req.params.id, 10);
  fs.readFile(userFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error con la conexion de datos" });
    }
    let conductors = JSON.parse(data);
    conductors = conductors.filter((conductor) => conductor.id !== conductorId);
    fs.writeFile(userFilePath, JSON.stringify(conductors, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error al eliminar Conductor" });
      }
      res.status(204).send();
    });
  });
});
//Apartado Paramedicoss
app.get("/paramedics", (req, res) => {
  fs.readFile(paramedicsFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error con la conexion de datos" });
    }
    const paramedic = JSON.parse(data);
    res.status(201).json(paramedic);
  });
});

app.post("/paramedics", (req, res) => {
  const newParamedic = req.body;

  fs.readFile(paramedicsFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error con la conexion de datos" });
    }
    const paramedics = JSON.parse(data);
    // const validation = validateParamedic(newParamedic, paramedics);
    // if (!validation.isValid) {
    //   return res.status(400).json({ error: validation.error });
    // }

    paramedics.push(newParamedic);

    fs.writeFile(
      paramedicsFilePath,
      JSON.stringify(paramedics, null, 2),
      (err) => {
        if (err) {
          return res.status(500).json({ error: "Error al guardar el usuario" });
        }
        res.status(201).json(newParamedic);
      }
    );
  });
});

app.post("/paramedicos", (req, res) => {
  const { nombre, certificacion } = req.body;
  if (!nombre || !certificacion)
    return res.status(400).json({ error: "Datos Incompletos o invalidos" });
  res.status(201).json({
    menssage: "paramedico registrado",
    paramedico: { nombre, certificacion },
  });
});

app.get("/paramedico/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, nombre: "claudia", certificacion: "Cert-001" });
});

app.put("/paramedico/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, certificacion } = req.body;
  res.json({
    menssage: `Paramedico con ID ${id} actualizado`,
    nombre,
    certificacion,
  });
});

app.delete("/paramedics/:id", (req, res) => {
  const paramedicId = parseInt(req.params.id, 10);
  fs.readFile(paramedicsFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error con la conexion de datos" });
    }
    let paramedics = JSON.parse(data);
    paramedics = paramedics.filter((paramedic) => paramedic.id !== paramedicId);
    fs.writeFile(
      paramedicsFilePath,
      JSON.stringify(paramedics, null, 2),
      (err) => {
        if (err) {
          return res.status(500).json({ error: "Error al eliminar paramedic" });
        }
        res.status(204).send();
      }
    );
  });
});

app.post("/servicios/:id/complicacion", (req, res) => {
  const { id } = req.params;
  const { tipo, descripcion, resultado } = req.body;
  if (!tipo || !descripcion || !resultado) {
    return res
      .status(400)
      .json({ error: "Datos Incompletos de la complicacion" });
  }
  res.status(201).json({
    menssage: "Complicacion registrada",
    servicioId: id,
    complicacion: { tipo, descripcion, resultado },
  });
});

app.get("/servicio/:id/complicacion", (req, res) => {
  const { id } = req.params;
  res.json({
    servicioId: id,
    complicacion: {
      tipo: "Grado 2",
      descripcion: "El paciente sufrio un paro cardiaco durante el traslado",
      resultado: "Fallecio en camino al Hospital",
    },
  });
});

app.get("/db-users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
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

app.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  const validation = await validateUser({ name, email, password }, prisma);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.error });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: "USER",
    },
  });
  res.status(201).json({ message: "user registered Successfully" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user)
    return res.status(400).json({ error: "invalid email or Paswword" });
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: "invalid email or Paswword" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JTW_SECRET,
    { expiresIn: "4h" }
  );
  res.json({ token });
});

app.get("/error", (req, res, next) => {
  next(new Error("Error Fabricado"));
});

app.listen(PORT, () => {
  console.log(`server http://localhost:${PORT}`);
});
