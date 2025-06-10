# 🚑 AmbApi - API para Gestión de Ambulancias

AmbApi es una API diseñada para gestionar los servicios de una empresa de ambulancias. Este proyecto utiliza tecnologías modernas como Node.js, Prisma, Keycloak y PostgreSQL para ofrecer una solución robusta y escalable.

## ✨ Características Principales

- **👤 Gestión de Usuarios:** Autenticación y autorización mediante Keycloak.
- **🚑 Gestión de Ambulancias:** CRUD completo para ambulancias.
- **📋 Gestión de Servicios:** Registro y seguimiento de servicios de ambulancia.
- **✅ Validaciones:** Validaciones robustas para garantizar la integridad de los datos.
- **📖 Documentación Swagger:** Documentación interactiva para probar los endpoints.

## 🛠️ Tecnologías Utilizadas

- **⚡ Node.js:** Framework principal para la API.
- **📦 Prisma:** ORM para interactuar con la base de datos PostgreSQL.
- **🔐 Keycloak:** Gestión de usuarios y roles.
- **🐘 PostgreSQL:** Base de datos relacional.
- **🐳 Docker:** Contenedores para facilitar la configuración y despliegue.

## 🗂️ Estructura del Proyecto

```
AmbApi/
├── docker-compose.yml
├── init.sql
├── keycloak.json
├── package.json
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   └── utils/
└── swagger.yaml
```

## 🚀 Configuración y Ejecución

### 🛠️ Requisitos Previos

- **🐳 Docker:** Asegúrate de tener Docker instalado en tu máquina.
- **⚡ Node.js:** Para desarrollo local.

### 📦 Pasos para Ejecutar con Docker Compose

1. 🛠️ Clona el repositorio:
   ```bash
   git clone https://github.com/ChristianSalazar12/AmbApi.git
   cd AmbApi
   ```

2. 🚀 Ejecuta el comando para iniciar los servicios:
   ```bash
   docker-compose up
   ```

   Esto iniciará los siguientes servicios:
   - **🐘 PostgreSQL** en el puerto `5433`.
   - **🔐 Keycloak** en el puerto `8080`.
   - **⚡ API** en el puerto `3005`.

3. 🌐 Accede a la API:
   - La API estará disponible en `http://localhost:3005`.
   - La interfaz de Keycloak estará disponible en `http://localhost:8080`.

### 🗃️ Migraciones de Base de Datos

Las migraciones de Prisma se ejecutan automáticamente al iniciar el contenedor de la API. Si necesitas ejecutarlas manualmente:

```bash
npx prisma migrate deploy
```

### 🌱 Semillas de Datos

Para poblar la base de datos con datos iniciales:

```bash
node prisma/seed.js
```

## 📖 Documentación de la API

La documentación de la API está disponible en formato Swagger. Puedes acceder a ella en:

```
http://localhost:3005/swagger
```

## 🤝 Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. 🍴 Haz un fork del repositorio.
2. 🌟 Crea una nueva rama para tu funcionalidad o corrección.
3. 📝 Realiza un pull request describiendo tus cambios.

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para propósitos personales y comerciales.

---

¡🚑 Gracias por usar AmbApi! Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.