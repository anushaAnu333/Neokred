const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const app = express();
const signinRoutes = require("./routes/signin.routes");
const signupRoutes = require("./routes/signup.routes");
const profile = require("./routes/profile.routes");
const refreshToken = require("./middleware/refreshToken");
const logout = require("./middleware/logout");
require("dotenv").config();
const PORT = process.env.PORT || 7777;

app.use(cors());
app.use(express.json());

app.use("/signup", signupRoutes);
app.use("/signin", signinRoutes);
app.use("/profile", profile);
app.use("/refresh", refreshToken);
app.use("/logout", logout);

app.listen(PORT, async () => {
  console.log("Listining to port 7777");
  try {
    await connection;
    console.log("Connected to db successfully");
  } catch (error) {
    console.log("Error connecting to db", error);
  }
});
