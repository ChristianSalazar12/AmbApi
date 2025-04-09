const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.header("Authorization");
  console.log("Authorization header:", authHeader); // 👈

  const token = authHeader?.split(" ")[1];
  console.log("Token extraído:", token); // 👈
  if (!token)
    return res.status(401).json({ error: "Access Denied, no token Provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid Token" });
    req.user = user;
    next();
  });
}
module.exports = authenticateToken;
