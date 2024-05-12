const { Router } = require("express");
const router = Router();
const { userModel } = require("../module/user.model");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const {
    email,
    password,
    confirmPassword,
    role,
    name,
    phone,
    address,
    dob,
    city,
    state,
    country,
    zipCode,
    securityQuestion,
    securityAnswer,
  } = req.body;

  // Check if email and password are provided
  if (
    !email ||
    !password ||
    !confirmPassword ||
    !name ||
    !phone ||
    !address ||
    !dob ||
    !city ||
    !state ||
    !country ||
    !zipCode ||
    !securityQuestion ||
    !securityAnswer
  ) {
    return res.json({
      success: false,
      message: "All fields are mandatory",
    });
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate email format
  if (!emailRegex.test(email)) {
    return res.json({
      success: false,
      message: "Invalid email format",
    });
  }

  // Email validation regex
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Validate password format
  if (!passwordRegex.test(password)) {
    return res.json({
      success: false,
      message:
        "Password must be at least 8 characters long and contain at least one uppercase letter and one digit",
    });
  }

  // Name validation regex
  const nameRegex = /^[A-Za-z ]{1,50}$/;

  // Validate name format
  if (!nameRegex.test(name)) {
    return res.json({
      success: false,
      message: "Invalid name format",
    });
  }

  // Dob validation regex
  const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

  // Validate dob format
  if (!dobRegex.test(dob)) {
    return res.json({
      success: false,
      message: "Invalid dob format",
    });
  }

  // phoneRegex validation regex
  const phoneRegex = /^\d{10}$/;

  // Validate phoneRegex format
  if (!phoneRegex.test(phone)) {
    return res.json({
      success: false,
      message: "Invalid phone number format",
    });
  }

  // addressRegex validation regex
  const addressRegex = /^[a-zA-Z0-9\s.,#\-]{1,100}$/;

  // Validate addressRegex format
  if (!addressRegex.test(address)) {
    return res.json({
      success: false,
      message: "Invalid address format.",
    });
  }

  // cityRegex validation regex
  const cityRegex = /^[a-zA-Z]{1,50}$/;

  // Validate cityRegex format
  if (!cityRegex.test(city)) {
    return res.json({
      success: false,
      message: "Invalid city format.",
    });
  }

  // stateRegex validation regex
  const stateRegex = /^[a-zA-Z\s]+$/;

  // Validate stateRegex format
  if (!stateRegex.test(state)) {
    return res.json({
      success: false,
      message: "Invalid state format.",
    });
  }

  // countryRegex validation regex
  const countryRegex = /^[a-zA-Z\s]+$/;

  // Validate countryRegex format
  if (!countryRegex.test(country)) {
    return res.json({
      success: false,
      message: "Invalid country format.",
    });
  }

  const codeRegex = /^\d{6}$/;

  // Validate zip Code format
  if (!codeRegex.test(zipCode)) {
    return res.json({
      success: false,
      message: "Invalid pincode format.",
    });
  }

  const securityQuestionRegex = /.*/;

  // Validate securityQuestion format
  if (!securityQuestionRegex.test(securityQuestion)) {
    return res.json({
      success: false,
      message: "Invalid security question format.",
    });
  }

  // securityAnswerRegex validation regex
  const securityAnswerRegex = /^.{1,100}$/;

  // Validate security Answer format
  if (!securityAnswerRegex.test(securityAnswer)) {
    return res.json({
      success: false,
      message: "Invalid security answer format.",
    });
  }

  if (password !== confirmPassword) {
    return res.json({
      success: false,
      message: "Password confirmation failed.",
    });
  }

  // Check if email already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.json({
      success: false,
      message: "Email already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 10);
  // Create new user
  const newUser = new userModel({
    email: email,
    password: hashedPassword,
    confirmPassword: hashedConfirmPassword,
    role: role,
    name: name,
    phone: phone,
    address: address,
    dob: dob,
    city: city,
    state: state,
    country: country,
    zipCode: zipCode,
    securityQuestion: securityQuestion,
    securityAnswer: securityAnswer,
  });

  try {
    await newUser.save();
    res.json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to create user",
      error: error.message,
    });
  }
});

module.exports = router;
