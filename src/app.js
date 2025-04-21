const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const loggerMiddlewares = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(loggerMiddlewares);
app.use(errorHandler);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", routes);

app.get("/inicio", (req, res) => {
  res.send("Bienvenido a mi api de prueba");
});
module.exports = app;
