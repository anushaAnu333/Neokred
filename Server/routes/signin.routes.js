const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { userModel } = require("../module/user.model");
const { generateAccessToken } = require("../middleware/authenticateToken");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are mandatory",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }

  const passwordRegex = /.{8,}/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters",
    });
  }

  try {
    const user = await userModel.findOne({ email });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        const token = generateAccessToken(user);
        const refreshToken = jwt.sign({ userId: user._id }, "123");
        res.json({
          message: "Login Success",
          token,
          email: user.email,
          role: user.role,
          userId: user._id,
          refreshToken: refreshToken,
          username: user.name,
        });
      } else {
        res.json({ message: "Incorrect password" });
      }
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
