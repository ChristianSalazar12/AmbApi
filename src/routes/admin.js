const { Router } = require("express");
const {
  createParamedic,
  getParamedic,
  deleteParamedic,
  modificParamedic,
  getParamedicById,
} = require("../controllers/adminController");
const authenticateToken = require("../middlewares/auth");

const router = Router();

router.post("/paramedic/add", createParamedic);
router.get("/paramedic", authenticateToken, getParamedic);
router.get("/paramedic/:id", getParamedicById);
router.delete("/paramedic/:id", deleteParamedic);
router.put("/paramedic/:id", modificParamedic);

module.exports = router;
