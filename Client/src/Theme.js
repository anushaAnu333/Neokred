import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  typography: {
    fontFamily: "Noto Sans",
    fontSize: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "3px",
          textTransform: "none",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white", // Set background color to white
          "& .MuiInputBase-root": {
            border: "1px solid #E2E7F0", // Remove border
            "&:focus": {
              border: "none", // Remove focus border
            },
          },
          "& .MuiOutlinedInput-root": {
            // "& fieldset": {
            //   border: "1px solid #E2E7F0",
            // },
          },
          "& label.Mui-focused": {
            color: "white", // Custom label color when focused
          },
          "& .MuiFilledInput-root": {
            backgroundColor: "white", // Set filled input background color to white
          },
          "&:hover .MuiFilledInput-root": {
            backgroundColor: "white", // Set filled input background color on hover
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#194DFF",
    },
    secondary: {
      main: "#194DFF",
    },
    error: {
      main: "#C12025",
    },
    info: {
      main: "#1B2535",
    },
  },
  sizing: {
    width: {
      default: 600,
    },
    height: {
      default: 400,
    },
  },
});

export default Theme;
