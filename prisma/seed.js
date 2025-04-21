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

  // Crear Paramédico
  const paramedico = await prisma.paramedico.create({
    data: {
      name: "Carlos",
      last_name: "Méndez",
      document: "1231231231",
      tipo_medic: "General",
      no_ci_medic: "CI987654",
      id_capacitation: "CAP12345",
      password: "a123456789",
      role: "ADMIN",
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
      role: "USER",
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
