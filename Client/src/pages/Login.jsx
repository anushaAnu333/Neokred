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
  Alert,
} from "@mui/material";

import SideImage from "../components/SideImage";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";
import ReloginModal from "../components/ReloginModal";
import { refreshToken } from "../redux/data/action";
import { useEffect } from "react";

const Wrapper = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  height: "100vh",
  padding: "20px",
}));

const ImgBox = styled(Stack)(({ theme }) => ({
  width: "45%",
  height: " 100%",
}));
const Text = styled(Typography)(({ theme }) => ({
  color: "#4D5E80",
}));
export default function Login() {
  const response = useSelector((store) => store.auth.signIn);
  console.log("response", response);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Token
  const rToken = localStorage.getItem("refreshToken");
  const getRelogin = localStorage.getItem("relogin");

  //Email
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  //password

  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const [alert, setAlert] = React.useState(false);

  //Email validation

  const handleEmail = (e) => {
    const value = e;
    setEmail(value);
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;

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

  //Password validation
  const handlePassword = (e) => {
    const value = e;
    setPassword(value);

    if (value === "") {
      setPasswordError("Please fill the field");
    } else if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  //Sending request
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (email === "") {
      handleEmail(data.get("email"));
    }

    if (password === "") {
      handlePassword(data.get("password"));
    }

    if (emailError === "" && passwordError === "") {
      if (email !== "" && password !== "") {
        const userData = {
          email: email,
          password: password,
        };
        dispatch(getAuth(userData));
      }
    }
  };

  //Relogin functionality
  const handleRelogin = () => {
    let data = {
      refreshToken: rToken,
    };
    dispatch(refreshToken(data));
    localStorage.removeItem("relogin");

    navigate("/profile");
    window.location.reload();
  };

  useEffect(() => {
    if (response && response.message === "Login Success") {
      navigate("/profile");
      window.location.reload();
    } else if (response && response.message) {
      setAlert(true);
    }
  }, [response]);

  return (
    <Wrapper sx={{ flexDirection: "row" }}>
      <ImgBox>
        <SideImage />
      </ImgBox>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Stack sx={{ alignItems: "start", gap: "20px" }}>
          <Stack>
            <Typography sx={{ color: "#7181A1" }} variant="body1">
              Welcome
            </Typography>

            <Typography variant="h5" fontWeight={"700"}>
              Login
            </Typography>
          </Stack>

          <Stack
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, textAlign: "start", gap: "20px", width: "100%" }}>
            <FormControl fullWidth>
              <Text variant="body2">
                Email<span className="required_field"></span>
              </Text>

              <TextField
                size="small"
                fullWidth
                placeholder="John.snow@gmail.com"
                name="email"
                type="email"
                id="email"
                error={emailError}
                onChange={(e) => handleEmail(e.target.value)}
                helperText={emailError}
              />
            </FormControl>

            <FormControl fullWidth>
              <Text variant="body2">
                Password<span className="required_field"></span>
              </Text>

              <TextField
                size="small"
                fullWidth
                name="password"
                placeholder="****************"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordError}
                onChange={(e) => handlePassword(e.target.value)}
                helperText={passwordError}
              />
            </FormControl>

            {alert && <Alert severity="error">{response.message}</Alert>}

            <Stack width="100%" alignItems="flex-end">
              <Link href="#" variant="body2" sx={{ color: "#6688FF" }}>
                Forgot password?
              </Link>
            </Stack>

            <Button
              type="submit"
              size="large"
              color="primary"
              variant="contained"
              sx={{ mt: 3, width: "50%" }}>
              Login
            </Button>

            <Text variant="body2" color="grey" sx={{ paddingRight: "10px" }}>
              Don't have an account?{" "}
              <Link href="/signup" variant="body2">
                {"Sign Up"}
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Container>
      {/* Relogin Modal */}
      <ReloginModal showModal={getRelogin} handleRelogin={handleRelogin} />
    </Wrapper>
  );
}
