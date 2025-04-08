const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");
  // Crear IPS

  const ips = await prisma.ips.create({
    data: {
      nombre: "Clínica San Juan",
      direccion: "Calle 123 #45-67",
    },
  });

  // Crear Ambulancia
  const ambulancia = await prisma.ambulancia.create({
    data: {
      modelo: "Toyota Hiace",
      placa: "ABC123",
      tipo: "UCI",
      ipsId: ips.id,
    },
  });

  // Crear Conductor
  const conductor = await prisma.conductor.create({
    data: {
      name: "Luis",
      last_name: "Ramírez",
      document: "1020304050",
      no_licencia: "LIC12345",
      no_fast_driver: "FD999",
    },
  });

  // Crear Paramédico
  const paramedico = await prisma.paramedico.create({
    data: {
      name: "Carlos",
      last_name: "Méndez",
      document: "123456789",
      tipo_medic: "General",
      no_ci_medic: "CI987654",
      id_capacitation: "CAP12345",
      password: "hashedpassword",
      rol: "USER",
    },
  });

  // Crear Auxiliar
  const auxiliar = await prisma.auxiliar.create({
    data: {
      name: "Ana",
      last_name: "García",
      document: "987654321",
      no_ci_auxiliar: "AUX654321",
      no_ci_soporte_vital: "SV123456",
      password: "hashedpassword",
      rol: "USER",
    },
  });

  // Crear Usuario asociado al paramédico
  const user1 = await prisma.usuario.create({
    data: {
      name: "Carlos Méndez",
      username: "carlos.mendez",
      identification: "123456789",
      password: "hashedpassword1",
      rol: "USER",
      paramedicoId: paramedico.id,
    },
  });

  // Crear Usuario asociado al auxiliar
  const user2 = await prisma.usuario.create({
    data: {
      name: "Ana García",
      username: "ana.garcia",
      identification: "987654321",
      password: "hashedpassword2",
      rol: "USER",
      auxiliarId: auxiliar.id,
    },
  });

  // Crear Turno
  const turno = await prisma.turnos.create({
    data: {
      time_start: new Date("2025-04-04T08:00:00Z"),
      time_end: new Date("2025-04-04T18:00:00Z"),
      paramedicId: paramedico.id,
      auxiliarId: auxiliar.id,
      conductorId: conductor.id,
      ambulanciaId: ambulancia.id,
    },
  });

  // Crear Paciente
  const paciente = await prisma.pacientes.create({
    data: {
      name: "Juan",
      last_name: "Pérez",
      document: "1122334455",
      entidad_salud: "EPS SaludTotal",
    },
  });

  // Crear Descripción
  const descripcion = await prisma.descripcion.create({
    data: {
      description: "Paciente encontrado inconsciente en vía pública",
      type_context: "CLINICO",
      implicados: "Ninguno",
    },
  });

  // Crear Servicio
  const servicio = await prisma.servicio.create({
    data: {
      date: new Date(),
      status: "PENDIENTE",
      time_arrived: new Date(),
      time_finish: new Date(),
      code_start: "C001",
      code_end: "C002",
      place_accident: "Av. Siempreviva",
      nro_informe: "INF001",
      id_turno: turno.id,
      id_paciente: paciente.id,
      id_descripcion: descripcion.id,
    },
  });

  // Crear Complicación
  const complicacion = await prisma.complicacion.create({
    data: {
      type: "RESPIRATORIA",
      description: "Dificultad respiratoria severa",
      id_servicio: servicio.id,
    },
  });

  console.log("✅ Database seeded!");
}

main()
  .catch((e) => {
    console.error("❌ Error en seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
