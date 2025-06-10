const axios = require("axios");

const KEYCLOAK_URL = "http://localhost:8080";
const REALM = "ambu-realm";
const CLIENT_ID = "ambu-backend";
const CLIENT_SECRET = "Wfz281VT2ivrBPym7iPt2dDA5DUJNp2d";

async function logins(document, password) {
  try {
    const response = await axios.post(
      `${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect/token`,
      new URLSearchParams({
        grant_type: "password",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        username: document,
        password: password,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    // Devuelve el token completo
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw new Error("Invalid credentials");
  }
}

module.exports = {
  logins,
};
