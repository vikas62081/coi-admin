import { createTheme } from "@mui/material/styles";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#005065",
    },
    secondary: {
      main: "rgba(63, 186, 141, 0.3)",
    },
    text: {
      primary: "#002E3A",
      secondary: "#3FBA8D",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
  },
});

export default appTheme;
