import {
  Box,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Avatar from "../images/Avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../redux/data/action";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Wrapper = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  marginTop: "2%",
  paddingBottom: "30px",
}));

const ContainerBox = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "850px",
  gap: "40px",
  height: "100%",
}));
const TableCells = styled(TableCell)(({ theme }) => ({
  textDecoration: "none",
  borderBottom: "none",
  fontWeight: 400,
  whiteSpace: "wrap",
  wordWrap: "break-word",
  color: "#7181A1",
  padding: 12,
  fontSize: "14px",
  verticalAlign: "top",
}));

const ProfileBox = styled(Stack)(({ theme }) => ({
  border: "1px solid #E2E7F0",
  textAlign: "start",
  color: "#7181A1",
  paddingTop: "10px",
  paddingBottom: "10px",
  borderRadius: "5px",
  width: "500px",
}));

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileDatas = useSelector((store) => store?.data?.profile);
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const [userProfile, setUserProfile] = useState("");

  const Profile = {
    Name: userProfile?.name,
    Email: userProfile?.email,
    DOB: userProfile?.dob,
    "Phone number": userProfile?.phone,
    Address: userProfile?.address,
    City: userProfile?.city,
    "State ": userProfile?.state,
    "ZIP code": userProfile?.zipCode,
    "Country ": userProfile?.country,
    Security: `${userProfile?.securityQuestion}
    ${userProfile?.securityAnswer}`,
  };

  useEffect(() => {
    let data = {
      userId: userData.userId,
    };

    dispatch(getProfile(data));
  }, []);

  useEffect(() => {
    if (
      profileDatas.message === "Token has been invalidated" ||
      profileDatas.message === "Token expired, please log in again"
    ) {
      localStorage.setItem("relogin", true);
      navigate("/login");
    }
  }, [profileDatas]);

  useEffect(() => {
    if (profileDatas) {
      setUserProfile(profileDatas?.profile);
    }
  }, [profileDatas]);

  return (
    <Stack>
      <Navbar />
      <Wrapper>
        <ContainerBox>
          <Stack sx={{}}>
            <Box as="img" src={Avatar} />
          </Stack>

          <ProfileBox>
            <Typography sx={{ paddingLeft: "10px" }}>PROFILE</Typography>
            <TableContainer
              style={{
                width: 370,
              }}
              sx={{}}>
              <Table sx={{ maxWidth: "100%" }}>
                <TableBody>
                  {Object.entries(Profile).map(([key, value]) => (
                    <TableRow key={key} sx={{ verticalAlign: "top" }}>
                      <TableCells component="th" scope="row">
                        {key}
                      </TableCells>

                      <TableCells sx={{ verticalAlign: "top", width: 200 }}>
                        {value}
                      </TableCells>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ProfileBox>
        </ContainerBox>
      </Wrapper>
    </Stack>
  );
};

export default Profile;
