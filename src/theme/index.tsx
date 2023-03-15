import { PropsWithChildren } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "green",
      main: "#0C2744",
      dark: "#030e1f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
    },
    warning: {
      main: "#F79577",
      dark: "#f67f59",
    },
  },
});
function AppThemeProvider(props: PropsWithChildren<any>) {
  const { children } = props;
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
