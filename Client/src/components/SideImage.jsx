import { Box, styled } from "@mui/material";
import React from "react";
import Background from "../images/Background.png";
import NeokredLogo from "../images/NeokredLogo.png";

const NeokredImg = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "30px",
  left: "30px",
  height: "40px",
  objectFit: "contain",
  zIndex: 1,
}));

const BackgroundImg = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
}));

const SideImage = () => {
  return (
    <>
      <NeokredImg component="img" src={NeokredLogo} alt="Logo" />

      <BackgroundImg component="img" src={Background} alt="Background" />
    </>
  );
};

export default SideImage;
