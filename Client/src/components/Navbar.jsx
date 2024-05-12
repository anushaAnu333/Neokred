import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import NeokredLogo from "../images/NeokredLogo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/data/action";
const NavbarMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData?.username);
  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };
  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: 999, bgcolor: "white" }}>
      <Toolbar>
        <Stack
          sx={{
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}>
          <Box component="img" src={NeokredLogo} alt="Logo" />
          <Stack flexDirection={"row"} gap={"10px"}>
            <Stack>
              <Typography sx={{ color: "#A0ABC0" }}>
                {userData.username}
              </Typography>
              <Typography sx={{ color: "#4D5E80" }}>NK Admin</Typography>
            </Stack>

            <IconButton onClick={handleLogOut}>
              <LogoutIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMain;
