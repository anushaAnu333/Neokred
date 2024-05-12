const mongoose = require("mongoose");

// MongoDB connection URI
const uri =
  "mongodb+srv://anushasurendrankp333:ImNvUTPcwVq3674g@neok.loiyarw.mongodb.net/?retryWrites=true&w=majority&appName=Neok";

const connection = mongoose.connect(uri);
module.express = { connection };
