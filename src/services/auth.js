const axios = require("axios");

const KEYCLOAK_URL = "http://keycloak:8080";
const REALM = "ambu-realm";
const CLIENT_ID = "ambu-backend";
const CLIENT_SECRET = "EtQKpjUq4r7hQwj31CREdPUIox9eLGSr";

async function logear(username, password) {
  console.log(username, password);
  try {
    const params = new URLSearchParams();
    params.append("grant_type", "password");
    params.append("client_id", CLIENT_ID);
    params.append("client_secret", CLIENT_SECRET);
    params.append("username", username);
    params.append("password", password);

    const response = await axios.post(
      `${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect/token`,
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Login failed:");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Stack:", error.stack);
    console.error("Full error:", error);
    throw new Error("Invalid credentials");
  }
}

module.exports = { logear };
