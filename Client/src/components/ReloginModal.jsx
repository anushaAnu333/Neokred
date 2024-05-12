import { Button, Modal, Stack, styled } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/data/action";
import { useNavigate } from "react-router-dom";
const Wrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: "white",
  padding: "20px",
  width: "300px",
  margin: "auto",
  marginTop: "200px",
  alignItems: "center",
  textAlign: "center",
}));
const ReloginModal = ({ showModal, handleRelogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };
  return (
    <Modal open={showModal} onClose={handleLogOut}>
      <Wrapper>
        <h2>Session Expired</h2>
        <p>Your session has expired. Please click below to relogin.</p>
        <Button variant="contained" color="primary" onClick={handleRelogin}>
          Relogin
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default ReloginModal;
