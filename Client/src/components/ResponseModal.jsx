import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    width: "400px",
    minHeight: "200px",
  },
  "& .MuiDialogTitle-root": {
    backgroundColor: "#4D5E80",
    color: "#FFFFFF",
    padding: "16px",
  },
  "& .MuiDialogContent-root": {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  "& .MuiDialogActions-root": {
    padding: "16px",
    justifyContent: "center",
  },
});

const ResponseModal = ({ isOpen, onClose, title, message }) => {
  const navigate = useNavigate();

  return (
    <StyledDialog open={isOpen} onClose={onClose}>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        {message === "Email already exists" ? (
          <Button onClick={onClose} color="primary" variant="contained">
            Close
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            color="primary"
            variant="contained">
            Login
          </Button>
        )}
      </DialogActions>
    </StyledDialog>
  );
};

export default ResponseModal;
