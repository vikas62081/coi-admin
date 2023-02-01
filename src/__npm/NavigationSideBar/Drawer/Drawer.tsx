import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { THEME_PROVIDER } from "../../colors";

const drawerWidth = 260;
export const TOP = 80;
const openedMixin = (theme: Theme, style: any): CSSObject => ({
  width: drawerWidth,
  background: THEME_PROVIDER.secondary,
  color: THEME_PROVIDER.primary,
  top: style?.top ?? 0,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme, style: any): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: THEME_PROVIDER.secondary,
  color: THEME_PROVIDER.primary,
  top: style?.top ?? 0,
  width: `calc(${theme.spacing(9)} - 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} - 1px)`,
  },
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, style }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  color: "#fff",
  ...(open && {
    ...openedMixin(theme, style),
    "& .MuiDrawer-paper": openedMixin(theme, style),
  }),
  ...(!open && {
    ...closedMixin(theme, style),
    "& .MuiDrawer-paper": closedMixin(theme, style),
  }),
}));
