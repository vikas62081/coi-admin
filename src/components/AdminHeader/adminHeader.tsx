import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./coi-logo.svg";
const AdminHeader = () => {
  return (
    <AppBar
      position="relative"
      style={{ background: "transparent", height: 70, boxShadow: "none" }}
    >
      <Toolbar style={{ padding: 0 }}>
        <img width="180" height="50" src={logo} alt="" loading="lazy" />

        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            letterSpacing: 4,
            fontSize: 15,
            marginTop: 1,
            color: "#6EC9FF",
          }}
        >
          ADMIN
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
