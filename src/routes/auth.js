const { Router } = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/user/authController");
const authenticateToken = require("../middlewares/auth");

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);

router.get("/protectedRoute", authenticateToken, (req, res) => {
  res.send("Esta es una ruta protegida");
});
module.exports = router;
