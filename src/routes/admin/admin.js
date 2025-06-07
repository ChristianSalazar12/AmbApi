const { Router } = require("express");
const {
  createParamedic,
  getParamedic,
  deleteParamedic,
  modificParamedic,
  getParamedicById,
  createAssistant,
  getAssistant,
  getAssistantById,
  deleteAssistant,
  modificAssistant,
} = require("../../controllers/admin/adminController");
// const authenticateToken = require("../../middlewares/auth");
const {
  createDriver,
  getDriver,
  deleteDriver,
  modificDriver,
  getDriverById,
} = require("../../controllers/admin/controllers/driverController");
const {
  createShift,
  getShift,
  getShiftById,
  deleteShift,
  modificShift,
} = require("../../controllers/admin/controllers/shiftController");
const {
  getAmbulance,
  createAmbulance,
  getAmbulanceById,
  deleteAmbulance,
  modificAmbulance,
} = require("../../controllers/admin/controllers/ambulanceController");
const {
  getIps,
  createIps,
  deleteIps,

  getIpsById,
  updateIps,
} = require("../../controllers/admin/controllers/ipsController");

const admin = Router();
// router.use(authenticateToken);

admin.post("/paramedic/add", createParamedic);
admin.get("/paramedic", getParamedic);
admin.get("/paramedic/:id", getParamedicById);
admin.delete("/paramedic/:id", deleteParamedic);
admin.put("/paramedic/:id", modificParamedic);

admin.post("/driver/add", createDriver);
admin.get("/driver", getDriver);
admin.get("/driver/:id", getDriverById);
admin.delete("/driver/:id", deleteDriver);
admin.put("/driver/:id", modificDriver);

admin.post("/assistant/add", createAssistant);
admin.get("/assistant", getAssistant);
admin.get("/assistant/:id", getAssistantById);
admin.delete("/assistant/:id", deleteAssistant);
admin.put("/assistant/:id", modificAssistant);

admin.post("/shift/add", createShift);
admin.get("/shift", getShift);
admin.get("/shift/:id", getShiftById);
admin.delete("/shift/:id", deleteShift);
admin.put("/shift/:id", modificShift);

admin.post("/ambulance/add", createAmbulance);
admin.get("/ambulance", getAmbulance);
admin.get("/ambulance/:id", getAmbulanceById);
admin.delete("/ambulance/:id", deleteAmbulance);
admin.put("/ambulance/:id", modificAmbulance);

admin.post("/ips/add", createIps);
admin.get("/ips", getIps);
admin.get("/ips/:id", getIpsById);
admin.delete("/ips/:id", deleteIps);
admin.put("/ips/:id", updateIps);

module.exports = admin;
