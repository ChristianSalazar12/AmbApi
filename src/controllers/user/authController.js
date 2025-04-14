const { register, login } = require("../../services/authService");

const registerController = async (req, res) => {
  const { name, last_name, document, password } = req.body;

  try {
    const newUser = await register(name, last_name, document, password);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const loginController = async (req, res) => {
  const { document, password } = req.body;

  try {
    const token = await login(document, password);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
module.exports = {
  registerController,
  loginController,
};
