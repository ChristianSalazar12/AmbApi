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
const authenticateToken = require("../../middlewares/auth");
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
} = require("../../controllers/admin/controllers/ipsController");
const router = Router();
router.use(authenticateToken);

router.post("/paramedic/add", createParamedic);
router.get("/paramedic", getParamedic);
router.get("/paramedic/:id", getParamedicById);
router.delete("/paramedic/:id", deleteParamedic);
router.put("/paramedic/:id", modificParamedic);

router.post("/driver/add", createDriver);
router.get("/driver", getDriver);
router.get("/driver/:id", getDriverById);
router.delete("/driver/:id", deleteDriver);
router.put("/driver/:id", modificDriver);

router.post("/assistant/add", createAssistant);
router.get("/assistant", getAssistant);
router.get("/assistant/:id", getAssistantById);
router.delete("/assistant/:id", deleteAssistant);
router.put("/assistant/:id", modificAssistant);

router.post("/shift/add", createShift);
router.get("/shift", getShift);
router.get("/shift/:id", getShiftById);
router.delete("/shift/:id", deleteShift);
router.put("/shift/:id", modificShift);

router.post("/ambulance/add", createAmbulance);
router.get("/ambulance", getAmbulance);
router.get("/ambulance/:id", getAmbulanceById);
router.delete("/ambulance/:id", deleteAmbulance);
router.put("/ambulance/:id", modificAmbulance);

router.post("/ips/add", createIps);
router.get("/ips", getIps);
/*
router.get("/ips/:id", getIpsById);
router.delete("/ips/:id", deleteIps);
router.put("/ips/:id", modificIps);
*/
module.exports = router;
