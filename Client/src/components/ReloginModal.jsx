import { Button, Modal, Stack, styled } from "@mui/material";
import React from "react";
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
  return (
    <Modal open={showModal}>
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
