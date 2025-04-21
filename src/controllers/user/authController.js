const { register, login, getAllUsers } = require("../../services/authService");

const registerController = async (req, res) => {
  const data = req.body;

  try {
    const newUser = await register(
      data.name,
      data.last_name,
      data.document,
      data.tipo_medic,
      data.no_ci_medic,
      data.id_capacitation,
      data.password,
      data.role
    );
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
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
  getUsers,
};
