// keycloak.js
const session = require("express-session");
const Keycloak = require("keycloak-connect");

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({ store: memoryStore });

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || "default_secret",
  resave: false,
  saveUninitialized: true,
  store: memoryStore,
});

module.exports = {
  keycloak,
  sessionMiddleware,
};
