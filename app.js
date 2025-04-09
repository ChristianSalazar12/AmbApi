require("dotenv").config();
const express = require("express");

const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./src/swaggerConfig"); // solo configuración
const swaggerDocs = require("./src/swagger/swaggerDocs"); // solo renderizado

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
const { validateParamedico } = require("./src/utils/paramedicsValidation");
const { validateAuxiliar } = require("./src/utils/auxiliarValidation");
const { validateTurno } = require("./src/utils/shifts.validation");
const { validateDescripcion } = require("./src/utils/descriptionValidation");
const { validateComplicacion } = require("./src/utils/complicationValidation");
const { validateServicio } = require("./src/utils/servicioValidation");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(loggerMiddlewares);
app.use(errorHandler);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
  const { document, password } = req.body;

  const validation = await validateLoginData({ document, password }, prisma);
  if (!validation.isValid) {
    console.log("Validation error:", validation.error);
    return res.status(400).json({ message: validation.error });
  }

  try {
    const paramedico = await prisma.paramedico.findFirst({
      where: { document },
    });
    console.log("paramedico encontrado:", paramedico);

    if (!paramedico) {
      return res
        .status(400)
        .json({ error: "Documento o contraseña inválidos." });
    }

    const validPassword = await bcrypt.compare(password, paramedico.password);
    if (!validPassword) {
      return res
        .status(400)
        .json({ error: "Documento o contraseña inválidos." });
    }

    const token = jwt.sign(
      { id: paramedico.id, role: paramedico.role },
      process.env.JWT_SECRET,
      { expiresIn: "4h" }
    );
    res.json({ token, user: paramedico });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: "Error del servidor al iniciar sesión." });
  }
});

//Ambulancias

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

//Drivers

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
app.post("/paramedics/add", async (req, res) => {
  try {
    const data = req.body;

    const validation = await validateParamedico(data, prisma);
    console.log("validation fue", validation);
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.error });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const nuevoParamedico = await prisma.paramedico.create({
      data: {
        name: data.name,
        last_name: data.last_name,
        document: data.document,
        tipo_medic: data.tipo_medic,
        no_ci_medic: data.no_ci_medic,
        id_capacitation: data.id_capacitation,
        password: hashedPassword,
        role: data.role,
      },
    });

    res.status(201).json({
      message: `Paramédico ${data.name} registrado con éxito.`,
      nuevoParamedico,
    });
  } catch (error) {
    console.error("Error al agregar paramédico:", error);
    res.status(500).json({ error: "Error interno al agregar paramédico." });
  }
});
app.get("/paramedics", async (req, res) => {
  try {
    const paramedicos = await prisma.paramedico.findMany();
    res.json(paramedicos);
  } catch (error) {
    console.error("Error al obtener paramédicos:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

app.delete("/paramedics/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const paramedico = await prisma.paramedico.findUnique({
      where: { id: parseInt(id) },
    });

    if (!paramedico) {
      return res.status(404).json({ message: "Paramédico no encontrado." });
    }

    await prisma.paramedico.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Paramédico eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar paramédico:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

//auxiliar
app.post("/assistant/add", async (req, res) => {
  try {
    const data = req.body;

    const validation = await validateAuxiliar(data, prisma);
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.error });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const nuevoAuxiliar = await prisma.auxiliar.create({
      data: {
        name: data.name,
        last_name: data.last_name,
        document: data.document,
        no_ci_auxiliar: data.no_ci_auxiliar,
        no_ci_soporte_vital: data.no_ci_soporte_vital,
        password: hashedPassword,
        role: data.role,
      },
    });
    res.status(201).json({
      message: `Auxiliar ${data.name} registrado con éxito.`,
      nuevoAuxiliar,
    });
  } catch (error) {
    console.error("Error al agregar auxiliar:", error);
    res.status(500).json({ error: "Error interno al agregar auxiliar." });
  }
});

app.get("/assistant", async (req, res) => {
  try {
    const auxiliares = await prisma.auxiliar.findMany();
    res.json(auxiliares);
  } catch (error) {
    console.error("Error al obtener auxiliares:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

app.delete("/assistant/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const auxiliar = await prisma.auxiliar.findUnique({
      where: { id: parseInt(id) },
    });

    if (!auxiliar) {
      return res.status(404).json({ message: "Auxiliar no encontrado." });
    }

    await prisma.auxiliar.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Auxiliar eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar auxiliar:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

//shifts

app.post("/shifts/add", async (req, res) => {
  try {
    const data = req.body;

    const validation = await validateTurno(data, prisma);
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.error });
    }

    const turno = await prisma.turnos.create({
      data: {
        time_start: new Date(data.time_start),
        time_end: new Date(data.time_end),
        paramedicId: data.paramedicId,
        auxiliarId: data.auxiliarId,
        conductorId: data.conductorId,
        ambulanciaId: data.ambulanciaId,
      },
    });

    res.status(201).json(turno);
  } catch (error) {
    console.error("Error al crear el turno:", error);
    res.status(500).json({ error: "Error interno al crear el turno." });
  }
});

app.get("/shifts", async (req, res) => {
  try {
    const turnos = await prisma.turnos.findMany({
      include: {
        paramedico: true,
        auxiliar: true,
        conductor: true,
        ambulancia: true,
      },
    });
    res.json(turnos);
  } catch (error) {
    console.error("Error al obtener turnos:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

app.get("/shifts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const turno = await prisma.turnos.findUnique({
      where: { id: parseInt(id) },
      include: {
        paramedico: true,
        auxiliar: true,
        conductor: true,
        ambulancia: true,
      },
    });

    if (!turno) {
      return res.status(404).json({ message: "Turno no encontrado." });
    }

    res.json(turno);
  } catch (error) {
    console.error("Error al obtener turno:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

app.delete("/shifts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const turno = await prisma.turnos.findUnique({
      where: { id: parseInt(id) },
    });

    if (!turno) {
      return res.status(404).json({ message: "Turno no encontrado." });
    }

    await prisma.turnos.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Turno eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar turno:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

//descripcion

app.post("/description/add", async (req, res) => {
  try {
    const data = req.body;

    const validation = await validateDescripcion(data, prisma);
    console.log("validation fue", validation);

    if (!validation.isValid) {
      return res.status(400).json({ message: validation.error });
    }

    const nuevaDescripcion = await prisma.descripcion.create({
      data: {
        description: data.description,
        type_context: data.type_context,
        implicados: data.implicados,
        servicio: data.servicioId
          ? { connect: { id: parseInt(data.servicioId) } }
          : undefined,
      },
    });

    res.status(201).json(nuevaDescripcion);
  } catch (error) {
    console.error("Error al agregar descripción:", error);
    res.status(500).json({ error: "Error interno al agregar descripción." });
  }
});

app.get("/description", async (req, res) => {
  try {
    const descripciones = await prisma.descripcion.findMany({
      include: {
        servicio: true,
      },
    });
    res.json(descripciones);
  } catch (error) {
    console.error("Error al obtener descripciones:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

app.delete("/description/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const descripcion = await prisma.descripcion.findUnique({
      where: { id: parseInt(id) },
    });

    if (!descripcion) {
      return res.status(404).json({ message: "Descripción no encontrada." });
    }

    await prisma.descripcion.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Descripción eliminada correctamente." });
  } catch (error) {
    console.error("Error al eliminar descripción:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

//complicaciones

app.post("/descripcion/add", async (req, res) => {
  const data = req.body;
  const validation = await validateDescripcion(data, prisma);

  if (!validation.isValid) {
    return res.status(400).json({ message: validation.error });
  }

  try {
    const nuevaDescripcion = await prisma.descripcion.create({
      data: {
        description: data.description,
        type_context: data.type_context,
        implicados: data.implicados,
        servicio: {
          connect: { id: data.servicioId },
        },
      },
    });

    await prisma.servicio.update({
      where: { id: data.servicioId },
      data: { id_descripcion: nuevaDescripcion.id },
    });

    res.json(nuevaDescripcion);
  } catch (error) {
    console.error("Error al agregar descripción:", error);
    res.status(500).json({ error: "Error interno al crear la descripción." });
  }
});

app.get("/complication", async (req, res) => {
  try {
    const complicaciones = await prisma.complicacion.findMany({
      include: { servicio: true },
    });
    res.status(200).json(complicaciones);
  } catch (error) {
    console.error("Error al obtener complicaciones:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.get("/complication/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const complicacion = await prisma.complicacion.findUnique({
      where: { id: Number(id) },
      include: { servicio: true },
    });

    if (!complicacion) {
      return res.status(404).json({ error: "Complicación no encontrada." });
    }

    res.status(200).json(complicacion);
  } catch (error) {
    console.error("Error al obtener complicación:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

app.delete("/complication/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const exist = await prisma.complicacion.findUnique({
      where: { id: Number(id) },
    });

    if (!exist) {
      return res.status(404).json({ error: "Complicación no encontrada." });
    }

    await prisma.complicacion.delete({ where: { id: Number(id) } });

    res.status(200).json({ message: "Complicación eliminada exitosamente." });
  } catch (error) {
    console.error("Error al eliminar complicación:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});
//servicio

app.post("/service/add", async (req, res) => {
  try {
    // Validación de datos
    const validation = await validateServicio(req.body, prisma);

    if (!validation.isValid) {
      return res.status(400).json({ error: validation.errors });
    }

    const newService = await prisma.servicio.create({
      data: {
        date: new Date(req.body.date),
        status: req.body.status,
        time_arrived: new Date(req.body.time_arrived),
        time_finish: new Date(req.body.time_finish),
        code_start: req.body.code_start,
        code_end: req.body.code_end,
        place_accident: req.body.place_accident,
        nro_informe: req.body.nro_informe,
        id_turno: req.body.id_turno,
        id_paciente: req.body.id_paciente,
      },
    });

    res.status(201).json({
      message: "Servicio creado correctamente",
      data: newService,
    });
  } catch (error) {
    console.error("Error al crear servicio:", error);
    res.status(500).json({ error: "Error interno al crear servicio" });
  }
});

app.get("/service", async (req, res) => {
  try {
    const servicios = await prisma.servicio.findMany({
      include: {
        turno: true,
        paciente: true,
        descripcion: true,
        complicacion: true,
      },
    });
    res.json(servicios);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener servicios" });
  }
});

app.get("/service/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const servicio = await prisma.servicio.findUnique({
      where: { id: Number(id) },
      include: {
        turno: true,
        paciente: true,
        descripcion: true,
        complicacion: true,
      },
    });
    if (!servicio)
      return res.status(404).json({ error: "Servicio no encontrado" });
    res.json(servicio);
  } catch (err) {
    res.status(500).json({ error: "Error al buscar el servicio" });
  }
});

app.delete("/service/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.servicio.delete({ where: { id: Number(id) } });
    res.json({ message: "Servicio eliminado" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar el servicio" });
  }
});

app.put("/service/:id", async (req, res) => {
  const { id } = req.params;
  const validation = await validateServicio(req.body, prisma);
  if (!validation.isValid)
    return res.status(400).json({ error: validation.error });

  try {
    const servicioActualizado = await prisma.servicio.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.json(servicioActualizado);
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar el servicio" });
  }
});

////////////

app.get("/error", (req, res, next) => {
  next(new Error("Error Fabricado"));
});

swaggerDocs(app, swaggerSpec); // <-- renderiza
app.listen(PORT, () => {
  console.log(`server http://localhost:${PORT}`);
});
