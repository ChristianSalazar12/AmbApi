const { Router } = require("express");
const adminRouter = require("./admin/admin");
const userRouter = require("./user/user");

const router = Router();

router.use("/admin", adminRouter);
router.use("/user", userRouter);

module.exports = router;
