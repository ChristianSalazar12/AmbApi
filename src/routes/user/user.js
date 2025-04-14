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

router.use(authenticateToken);

router.post("/description/add", createDescription);
router.get("/description", getDescription);
router.get("/description/:id", getDescriptionById);
router.delete("/description/:id", deleteDescription);
router.put("/description/:id", modificDescription);

module.exports = router;
