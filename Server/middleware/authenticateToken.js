const jwt = require("jsonwebtoken");

// Function to generate access token
const generateAccessToken = (user) => {
  return jwt.sign({ userId: user._id }, "123", { expiresIn: "5m" });
};

const tokenBlacklist = new Set();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.sendStatus(401);
  }
  if (tokenBlacklist.has(token)) {
    return res.json({ message: "Token has been invalidated" });
  }

  jwt.verify(token, "123", (err, user) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        tokenBlacklist.add(token);
        return res.json({ message: "Token expired, please log in again" });
      } else {
        return res.json({ message: "Invalid token" });
      }
    }

    req.user = user;
    next();
  });
};

module.exports = { authenticateToken, generateAccessToken, tokenBlacklist };
