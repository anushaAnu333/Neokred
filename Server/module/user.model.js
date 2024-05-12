const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  confirmPassword: { type: String, required: true },
  role: { type: String, require: false },
  name: { type: String, require: true },
  phone: { type: String, require: true },
  address: { type: String, require: true },
  dob: { type: String, require: true },
  city: { type: String, require: true },
  country: { type: String, require: true },
  state: { type: String, require: true },
  zipCode: { type: String, require: true },
  securityQuestion: { type: String, require: true },
  securityAnswer: { type: String, require: true },
});


const userModel = mongoose.model("userCridential", userSchema);
module.exports = { userModel };
