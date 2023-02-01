import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  CardContent,
  Grid,
  List,
  Typography,
} from "@mui/material";
import { TOP } from "./Drawer/Drawer";
import { COLORS, THEME_PROVIDER } from "../colors";

export const useStyles = makeStyles({
  hide: {
    visibility: "hidden",
  },
  link: {
    color: COLORS.FIREFLY[500],
    textDecoration: "none",
    "&:hover": {
      color: COLORS.FIREFLY[500],
    },
  },
  menuItem: {
    "&:hover": {
      backgroundColor: COLORS.SLATE[100],
    },
  },
  notSelected: {
    color: THEME_PROVIDER.notSelected.color,
    "&:hover": {
      background: THEME_PROVIDER.notSelected.bg,
      borderRadius: "4px",
      color: THEME_PROVIDER.notSelected.color,
    },
  },
  selected: {
    background: `${THEME_PROVIDER.selected.bg} !important`,
    color: THEME_PROVIDER.selected.color,
    borderRadius: "4px !important",
    "&:hover": {
      background: THEME_PROVIDER.selected.bg,
      color: THEME_PROVIDER.selected.color,
      borderRadius: "4px",
    },
  },
  activeIcon: {
    color: THEME_PROVIDER.selected.bg,
  },
  inactiveIcon: {
    color: THEME_PROVIDER.secondary,
  },
  FooterIcon: {
    backgroundColor: COLORS.WHITE,
    gap: 0,
    marginLeft: 18,
    marginBottom: 11,
    borderRadius: 2,
    width: 230,
    height: 33,
    "&:hover": {
      backgroundColor: COLORS.WHITE,
    },
  },
  footerDetails: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: "smaller",
  },

  footerLogo: {
    minWidth: 0,
    padding: "0 14px 0 3px",
  },
  footerLinks: {
    color: COLORS.FIREFLY[200],
    textDecoration: "underline",
    fontSize: 12,
    fontWeight: 500,
    "&:hover": {
      color: COLORS.FIREFLY[500],
    },
    "&:active": {
      color: COLORS.MINT[500],
    },
  },
  poweredBy: {
    fontWeight: 500,
    color: COLORS.FIREFLY[500],
    textDecoration: "none",
  },
});
export const StyledMenu = styled(Button)({
  color: "black",
});
export const ClientCard = styled(Card)({
  backgroundColor: THEME_PROVIDER.client,
  margin: 16,
});
export const StyledTypography = styled(Typography)({
  textAlign: "center",
  whiteSpace: "normal",
  fontWeight: 400,
  fontSize: 13,
  color: COLORS.FIREFLY[500],
  paddingRight: 20,
  paddingLeft: 20,
});
export const StyledCompanyTypography = styled(Typography)({
  textAlign: "center",
  whiteSpace: "normal",
  fontWeight: 600,
  fontSize: 14,
  color: COLORS.FIREFLY[500],
});
export const ClientContent = styled(CardContent)({
  borderRadius: 2,
  paddingRight: 0,
  paddingLeft: 0,
});
export const ClientImage = styled(Grid)({
  paddingTop: 8,
  textAlign: "center",
});
export const ListContainer = styled(List)({
  padding: "8px",
  columnGap: 8,
});
export const GridContainer = styled(Grid)({
  position: "absolute",
  bottom: TOP,
  container: true,
  rowspacing: 4,
});
export const GridItem = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  item: true,
  sm: 12,
});
export const MyIconButton = styled(IconButton)({
  background: `${THEME_PROVIDER.secondary} !important`,
  borderRadius: 4,
  border: "1px black solid",
  position: "fixed",
  width: 32,
  height: 32,
  marginRight: -14,
  bottom: 140,
  "&:hover": {
    background: `${THEME_PROVIDER.selected.bg} !important`,
  },
});
