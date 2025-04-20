const { Router } = require("express");
const router = Router();
const authenticateToken = require("../../middlewares/auth");
const {
  createDescription,
  getDescription,
  getDescriptionById,
  deleteDescription,
  modificDescription,
} = require("../../controllers/user/controllers/descriptionController");

const {
  createPatient,
  getPatient,
  getPatientById,
  deletePatient,
  modificPatient,
} = require("../../controllers/user/controllers/patientController");
const {
  createService,
  getService,
} = require("../../controllers/user/controllers/attetionController");

router.use(authenticateToken);

router.post("/description/add", createDescription);
router.get("/description", getDescription);
router.get("/description/:id", getDescriptionById);
router.delete("/description/:id", deleteDescription);
router.put("/description/:id", modificDescription);

router.post("/patient/add", createPatient);
router.get("/patient", getPatient);
router.get("/patient/:id", getPatientById);
router.delete("/patient/:id", deletePatient);
router.put("/patient/:id", modificPatient);

router.post("/attention/add", createService);
router.get("/attention", getService);
/*router.get("/service/:id", getServiceById);
router.delete("/service/:id", deleteService);

router.put("/service/:id", modificService);*/

module.exports = router;
