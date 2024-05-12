const { Router } = require("express");
const { userModel } = require("../module/user.model");
const { authenticateToken } = require("../middleware/authenticateToken");

const router = Router();

router.use(authenticateToken);

router.post("/", async (req, res) => {
  const userId = req.body.userId;
  console.log("userid************************", userId);
  try {
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    const profile = await userModel
      .findById(userId)
      .select("-password -confirmPassword");

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "User profile not found",
      });
    }

    res.json({
      success: true,
      profile,
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
