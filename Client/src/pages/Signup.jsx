import * as React from "react";

import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Typography,
  Container,
  FormControl,
  Stack,
  styled,
} from "@mui/material";

import SideImage from "../components/SideImage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAuth } from "../redux/auth/action";
import ResponseModal from "../components/ResponseModal";

const FieldBox = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: "20px",
}));
const FieldText = styled(Typography)(({ theme }) => ({
  color: "#4D5E80",
  marginBottom: 5,
}));
const Field = styled(TextField)(({ theme }) => ({
  "& fieldset": { border: "none" },
  width: "100%",
}));
const Wrapper = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "start",
  minHeight: "700px",
  padding: "20px",
}));

const ImgBox = styled(Stack)(({ theme }) => ({
  width: "35%",
  height: "700px",
}));

export default function SignUp() {
  const response = useSelector((store) => store.auth.signUp);
  console.log("response", response);
  const dispatch = useDispatch();

  //Email
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  //password
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  //Name
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState("");

  //Date of birth
  const [dob, setDob] = React.useState("");
  const [dobError, setDobError] = React.useState("");

  //Confirm password
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");

  //Phone Number
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneNumberError, setPhoneNumberError] = React.useState("");

  //Security Answer
  const [securityAnswer, setSecurityAnswer] = React.useState("");
  const [securityAnswerError, setSecurityAnswerError] = React.useState("");

  //Address
  const [address, setAddress] = React.useState("");
  const [addressError, setAddressError] = React.useState("");

  //City
  const [city, setCity] = React.useState("");
  const [cityError, setCityError] = React.useState("");

  //State
  const [state, setState] = React.useState("");
  const [stateError, setStateError] = React.useState("");

  //Zip code
  const [zipCode, setZipCode] = React.useState("");
  const [zipCodeError, setZipCodeError] = React.useState("");

  //Country
  const [country, setCountry] = React.useState("");
  const [countryError, setCountryError] = React.useState("");

  //Submit Modal
  const [showModal, setShowModal] = React.useState(false);

  //Username Validation
  const handleName = (e) => {
    const value = e;
    const regex = /^[a-zA-Z\s]{1,50}$/;

    if (value === "" || regex.test(value)) {
      setName(value);
      setNameError("");
    }
    if (value !== "" && !regex.test(value)) {
      setNameError("Enter valid name");
    }
    if (value === "") {
      setNameError("Please fill the field");
    }
  };

  //Password Validation
  const handlePassword = (e) => {
    const value = e;
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (value === "" || regex.test(value)) {
      setPassword(value);
      setPasswordError("");
    }
    if (value !== "" && !regex.test(value)) {
      setPasswordError("Include 8 characters,one uppercase and one digit");
    }
    if (value === "") {
      setPasswordError("Please fill the field");
    }
  };

  //confirm Password Validation
  const handleConfirmPassword = (e) => {
    const value = e;

    if (value === "") {
      setConfirmPasswordError("Please fill the field");
    } else if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPassword(value);
      setConfirmPasswordError("");
    }
  };

  //Email Validation
  const handleEmail = (e) => {
    const value = e;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    setEmail(value);

    if (value === "" || regex.test(value)) {
      setEmail(value);
      setEmailError("");
    }
    if (value !== "" && !regex.test(value)) {
      setEmailError("Enter valid email");
    }
    if (value === "") {
      setEmailError("Please fill the field");
    }
  };

  //Date of birth Validation
  const handleDob = (e) => {
    const value = e;
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (value === "" || regex.test(value)) {
      setDob(value);
      setDobError("");
    }
    if (value !== "" && !regex.test(value)) {
      setDobError("Enter valid date of birth");
    }
    if (value === "") {
      setDobError("Please fill the field");
    }
  };

  //Phone Number Validation
  const handlePhoneNumber = (e) => {
    const value = e;
    const regex = /^\d{10}$/;

    if (value === "" || regex.test(value)) {
      setPhoneNumber(value);
      setPhoneNumberError("");
    }
    if (value !== "" && !regex.test(value)) {
      setPhoneNumberError("Enter valid phone number");
    }
    if (value === "") {
      setPhoneNumberError("Please fill the field");
    }
  };

  //Security Answer Validation
  const handleSecurityAnswer = (e) => {
    const value = e;
    const regex = /^[a-zA-Z0-9\s.,#\-]{1,100}$/;

    if (value === "" || regex.test(value)) {
      setSecurityAnswer(value);
      setSecurityAnswerError("");
    }
    if (value !== "" && !regex.test(value)) {
      setSecurityAnswerError("Maximum charecter is 100");
    }
    if (value === "") {
      setSecurityAnswerError("Please fill the field");
    }
  };

  //Address Validation
  const handleAddress = (e) => {
    const value = e;
    const regex = /^[a-zA-Z0-9\s.,#\-]{1,100}$/;

    if (value === "" || regex.test(value)) {
      setAddress(value);
      setAddressError("");
    }
    if (value !== "" && !regex.test(value)) {
      setAddressError("Enter address with 100 characters.");
    }
    if (value === "") {
      setAddressError("Please fill the field");
    }
  };

  //City Validation
  const handleCity = (e) => {
    const value = e;
    const regex = /^[a-zA-Z]{1,50}$/;

    if (value === "" || regex.test(value)) {
      setCity(value);
      setCityError("");
    }
    if (value !== "" && !regex.test(value)) {
      setCityError("Enter valid city");
    }
    if (value === "") {
      setCityError("Please fill the field");
    }
  };

  //State Validation
  const handleState = (e) => {
    const value = e;
    const regex = /^[a-zA-Z\s]+$/;

    if (value === "" || regex.test(value)) {
      setState(value);
      setStateError("");
    }
    if (value !== "" && !regex.test(value)) {
      setStateError("Enter valid state");
    }
    if (value === "") {
      setStateError("Please fill the field");
    }
  };

  //Country Validation
  const handleCountry = (e) => {
    const value = e;
    const regex = /^[a-zA-Z\s]+$/;

    if (value === "" || regex.test(value)) {
      setCountry(value);
      setCountryError("");
    }
    if (value !== "" && !regex.test(value)) {
      setCountryError("Enter valid country");
    }
    if (value === "") {
      setCountryError("Please fill the field");
    }
  };

  //Zip Code Validation

  const handleZip = (e) => {
    const value = e;
    const regex = /^\d{6}$/;

    if (value === "" || regex.test(value)) {
      setZipCode(value);
      setZipCodeError("");
    }
    if (value !== "" && !regex.test(value)) {
      setZipCodeError("Enter valid zip code");
    }
    if (value === "") {
      setZipCodeError("Please fill the field");
    }
  };

  //Submitting the data

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (email === "") {
      handleEmail(data.get("email"));
    }

    if (password === "") {
      handlePassword(data.get("password"));
    }

    if (confirmPassword === "") {
      handleConfirmPassword(data.get("cpassword"));
    }

    if (phoneNumber === "") {
      handlePhoneNumber(data.get("phone"));
    }

    if (name === "") {
      handleName(data.get("name"));
    }

    if (securityAnswer === "") {
      handleSecurityAnswer(data.get("question"));
    }

    if (zipCode === "") {
      handleZip(data.get("code"));
    }

    if (country === "") {
      handleCountry(data.get("country"));
    }

    if (state === "") {
      handleState(data.get("state"));
    }

    if (city === "") {
      handleCity(data.get("city"));
    }

    if (address === "") {
      handleAddress(data.get("address"));
    }

    if (dob === "") {
      handleDob(data.get("dob"));
    }

    if (
      emailError === "" &&
      passwordError === "" &&
      nameError === "" &&
      dobError === "" &&
      confirmPasswordError === "" &&
      phoneNumberError === "" &&
      securityAnswerError === "" &&
      addressError === "" &&
      stateError === "" &&
      zipCodeError === "" &&
      countryError === "" &&
      cityError === ""
    ) {
      if (
        email !== "" &&
        password !== "" &&
        name !== "" &&
        dob !== "" &&
        confirmPassword !== "" &&
        phoneNumber !== "" &&
        securityAnswer !== "" &&
        address !== "" &&
        city !== "" &&
        state !== "" &&
        zipCode !== "" &&
        country !== ""
      ) {
        const user = {
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          name: name,
          phone: phoneNumber,
          address: address,
          dob: dob,
          city: city,
          country: country,
          state: state,
          zipCode: zipCode,
          securityQuestion: "What is your School name ?",
          securityAnswer: securityAnswer,
        };
        console.log("dataaa", user);
        dispatch(postAuth(user));
      }
    }
  };
  useEffect(() => {
    if (Object.keys(response).length === 0) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, [response]);
  return (
    <Wrapper>
      <ImgBox>
        <SideImage />
      </ImgBox>
      <Container component="main" sx={{ width: "60%" }}>
        <CssBaseline />

        <Stack sx={{ alignItems: "start", gap: "20px" }}>
          <Stack sx={{ textAlign: "start" }}>
            <Typography sx={{ color: "#7181A1" }} variant="body1">
              Welcome
            </Typography>

            <Typography variant="h5" fontWeight={"700"}>
              Sign up
            </Typography>
          </Stack>

          <Stack
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              textAlign: "start",
              width: "100%",

              gap: "20px",
            }}>
            <FieldBox>
              <FormControl fullWidth>
                <FieldText>Full Name</FieldText>
                <Field
                  size="small"
                  fullWidth
                  id="name"
                  placeholder="John Doe"
                  name="name"
                  error={nameError}
                  onChange={(e) => handleName(e.target.value)}
                  helperText={nameError}
                />
              </FormControl>
              <FormControl fullWidth>
                <FieldText>Email</FieldText>
                <Field
                  size="small"
                  fullWidth
                  id="email"
                  type="email"
                  placeholder="allthebest@neokred.com"
                  name="email"
                  value={email}
                  error={emailError}
                  onChange={(e) => handleEmail(e.target.value)}
                  helperText={emailError}
                />
              </FormControl>
            </FieldBox>

            <FieldBox>
              <FormControl fullWidth>
                <FieldText>Date of Birth</FieldText>
                <Field
                  size="small"
                  type="date"
                  fullWidth
                  id="dob"
                  name="dob"
                  error={dobError}
                  onChange={(e) => handleDob(e.target.value)}
                  helperText={dobError}
                />
              </FormControl>
              <FormControl fullWidth>
                <FieldText>Password</FieldText>
                <Field
                  size="small"
                  fullWidth
                  name="password"
                  placeholder="*********"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={passwordError}
                  onChange={(e) => handlePassword(e.target.value)}
                  helperText={passwordError}
                />
              </FormControl>
            </FieldBox>

            <FieldBox>
              <FormControl fullWidth>
                <FieldText>Phone Number</FieldText>
                <Field
                  size="small"
                  fullWidth
                  id="phone"
                  placeholder="+91-9876543210"
                  name="phone"
                  autoComplete="phone"
                  autoFocus
                  error={phoneNumberError}
                  onChange={(e) => handlePhoneNumber(e.target.value)}
                  helperText={phoneNumberError}
                />
              </FormControl>

              <FormControl fullWidth>
                <FieldText>Confirm Password</FieldText>
                <Field
                  size="small"
                  fullWidth
                  name="cpassword"
                  placeholder="*********"
                  type="password"
                  id="cpassword"
                  autoComplete="new-password"
                  error={confirmPasswordError}
                  onChange={(e) => handleConfirmPassword(e.target.value)}
                  helperText={confirmPasswordError}
                />
              </FormControl>
            </FieldBox>

            <FieldBox width="49%">
              <FormControl fullWidth>
                <FieldText>Security Question</FieldText>
                <Typography sx={{ color: "#A0ABC0" }}>
                  What is your School name ?
                </Typography>
                <Field
                  size="small"
                  sx={{
                    width: "100%",
                  }}
                  id="question"
                  placeholder=""
                  name="question"
                  autoComplete="question"
                  autoFocus
                  error={securityAnswerError}
                  onChange={(e) => handleSecurityAnswer(e.target.value)}
                  helperText={securityAnswerError}
                />
              </FormControl>
            </FieldBox>

            <FieldBox>
              <FormControl fullWidth>
                <FieldText>Address</FieldText>
                <Field
                  size="small"
                  fullWidth
                  id="address"
                  placeholder="Address"
                  name="address"
                  autoComplete="address"
                  autoFocus
                  error={addressError}
                  onChange={(e) => handleAddress(e.target.value)}
                  helperText={addressError}
                />
              </FormControl>
            </FieldBox>

            <FieldBox>
              <FormControl fullWidth>
                <FieldText>City</FieldText>
                <Field
                  size="small"
                  fullWidth
                  id="city"
                  placeholder="City"
                  name="city"
                  autoComplete="city"
                  autoFocus
                  error={cityError}
                  onChange={(e) => handleCity(e.target.value)}
                  helperText={cityError}
                />
              </FormControl>

              <FormControl fullWidth>
                <FieldText>State</FieldText>
                <Field
                  size="small"
                  fullWidth
                  name="state"
                  placeholder="State"
                  type="state"
                  id="state"
                  autoComplete="state"
                  error={stateError}
                  onChange={(e) => handleState(e.target.value)}
                  helperText={stateError}
                />
              </FormControl>

              <FormControl fullWidth>
                <FieldText>Zip</FieldText>
                <Field
                  size="small"
                  fullWidth
                  id="code"
                  placeholder="Zip code"
                  name="code"
                  autoComplete="code"
                  autoFocus
                  error={zipCodeError}
                  onChange={(e) => handleZip(e.target.value)}
                  helperText={zipCodeError}
                />
              </FormControl>

              <FormControl fullWidth>
                <FieldText>Country</FieldText>
                <Field
                  size="small"
                  fullWidth
                  name="country"
                  placeholder="Country"
                  type="country"
                  id="country"
                  autoComplete="country"
                  error={countryError}
                  onChange={(e) => handleCountry(e.target.value)}
                  helperText={countryError}
                />
              </FormControl>
            </FieldBox>

            <Stack>
              <Button
                size="large"
                type="submit"
                variant="contained"
                sx={{ mt: 2, width: "250px" }}>
                Sign Up
              </Button>
            </Stack>
            <Stack>
              <Typography color="grey">
                Don't have an account? <Link href="/login">{"Login"}</Link>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <ResponseModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Sign Up Response"
        message={response.message}
      />
    </Wrapper>
  );
}
