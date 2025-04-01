const { Router } = require("express");
const { register, login } = require("../controllers/authController");
const authenticateToken = require("../middlewares/auth");

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/protectedRoute", authenticateToken, (req, res) => {
  res.send("Esta es una ruta protegida");
});
module.exports = router;
