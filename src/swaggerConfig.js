// docs/swaggerConfig.js
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AmbuAPI",
      version: "1.0.0",
      description: "Documentación de la API Ambu generada con swagger-jsdoc.",
    },
  },
  apis: ["./routes/*.js", "./src/swagger/swaggerDocs.js"], // Rutas donde estarán los comentarios @swagger
});

module.exports = swaggerSpec;
