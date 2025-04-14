const { Router } = require("express");
const authRouter = require("../routes/auth");
const adminRouter = require("../routes/admin/admin");
const userRouter = require("../routes/user/user");
const { route } = require("../../app");
const router = Router();

router.use("/auth", authRouter);
router.use("/admin", adminRouter);
router.use("/user", userRouter);

module.exports = router;
