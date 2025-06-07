const { login } = require("../../services/authService");

async function logins(req, res) {
  const { username, password } = req.body;
  try {
    const token = await login(username, password);
    res.json(token);
  } catch (error) {
    res.status(401).json({ error: "Invalid credentials" });
  }
}

module.exports = {
  logins,
};
