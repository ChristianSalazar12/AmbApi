const { Router } = require("express");
const {
  registerController,
  loginController,
  getUsers,
} = require("../controllers/user/authController");
const authenticateToken = require("../middlewares/auth");
const { route } = require("../app");

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/users", getUsers);

router.get("/protectedRoute", (req, res) => {
  res.send("Esta es una ruta protegida");
});
module.exports = router;
