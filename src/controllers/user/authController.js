// controllers/authController.js

const { logear } = require("../../services/auth");

async function handleLogin(req, res) {
  const { username, password } = req.body;
  console.log(req.body);

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  try {
    const token = await logear(username, password);
    res.json(token);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

module.exports = { handleLogin };
