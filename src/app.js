require("dotenv").config();
const express = require("express");

const bodyParser = require("body-parser");
const loggerMiddlewares = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const swaggerUi = require("swagger-ui-express");

const YAML = require("yamljs");

const swaggerDocument = YAML.load("./swagger.yaml");
const cors = require("cors");
const { keycloak, sessionMiddleware } = require("./middlewares/keycloak");
const router = require("./routes");
const { handleLogin } = require("./controllers/user/authController");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(loggerMiddlewares);

app.use(sessionMiddleware);
app.use(keycloak.middleware());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post("/login", handleLogin);
app.use("/api", keycloak.protect(), router);

app.get("/inicio", keycloak.protect(), (req, res) => {
  res.send("Bienvenido a mi api de prueba");
});
app.use(errorHandler);
module.exports = app;
