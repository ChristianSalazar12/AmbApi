// src/swaggerConfig.js
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "AmbuAPI - Documentación",
    version: "1.0.0",
    description: "Documentación generada por Swagger para AmbuAPI",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor local",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/**/*.js"], // Ruta correcta según tu estructura
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
