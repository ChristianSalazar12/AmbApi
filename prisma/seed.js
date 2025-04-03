const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 🏥 Crear algunas IPS
  const ips1 = await prisma.iPS.create({
    data: {
      nombre: "Clínica Santa Fe",
    },
  });

  const ips2 = await prisma.iPS.create({
    data: {
      nombre: "Hospital Central",
    },
  });

  // 🚑 Crear ambulancias
  const ambulancia1 = await prisma.ambulancia.create({
    data: {
      placa: "ABC-124",
      tipo: "UTIM", // Unidad de Terapia Intensiva Móvil
      ipsId: ips1.id,
    },
  });

  const ambulancia2 = await prisma.ambulancia.create({
    data: {
      placa: "XYZ-786",
      tipo: "Básica",
      ipsId: ips2.id,
    },
  });

  // 👤 Crear usuarios
  const usuario1 = await prisma.usuario.create({
    data: {
      name: "Carlos Pérez",
      email: "carlos.perez@example.com",
      password: "a12345678",
      role: "ADMIN",
      ipsId: ips1.id,
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      name: "Ana Rodríguez",
      email: "ana.rodriguez@example.com",
      password: "a12345678",
      role: "USER",
      ipsId: ips2.id,
    },
  });

  // 🏥 Pacientes
  const paciente1 = await prisma.paciente.create({
    data: {
      nombre: "Juan López",
      documento: "12345678",
      edad: 45,
    },
  });

  // 🚑 Servicio
  const servicio1 = await prisma.servicio.create({
    data: {
      ambulanciaId: ambulancia1.id,
      conductorId: usuario1.id,
      paramedicoId: usuario2.id,
      pacienteId: paciente1.id,
      estado: "EN_CURSO",
    },
  });

  // ⏳ Registro de tiempos del servicio
  await prisma.tiempoServicio.createMany({
    data: [
      {
        servicioId: servicio1.id,
        evento: "Salida del hospital",
      },
      {
        servicioId: servicio1.id,
        evento: "Llegada al sitio del accidente",
      },
    ],
  });

  console.log("✅ Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
