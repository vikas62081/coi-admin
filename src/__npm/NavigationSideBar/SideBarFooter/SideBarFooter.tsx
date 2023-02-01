import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Grid, Link } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  ClientCard,
  ClientImage,
  StyledTypography,
  StyledCompanyTypography,
  useStyles,
  ClientContent,
} from "../navigation.styles";

export const SideBarFooter = (props: any) => {
  const { open, company, address, phone, email, image, isEnterpriseChild } =
    props;
  const classes = useStyles();
  const hideCard = useMediaQuery("(min-height:900px)");
  return (
    <div>
      {open && <Divider />}
      {open && isEnterpriseChild && hideCard && (
        <ClientCard>
          <ClientImage>{image}</ClientImage>
          <ClientContent>
            <StyledCompanyTypography>{company}</StyledCompanyTypography>
            <StyledTypography>{address}</StyledTypography>
            <StyledTypography>{phone}</StyledTypography>
            <StyledTypography sx={{ width: "230px", wordWrap: "break-word" }}>
              {email}
            </StyledTypography>
          </ClientContent>
        </ClientCard>
      )}
      {open && (
        <ListItem className={classes.FooterIcon}>
          <ListItemIcon className={classes.footerLogo}>{image}</ListItemIcon>
          <ListItemText className={classes.poweredBy}>
            Powered by myCOI
          </ListItemText>
        </ListItem>
      )}
      <div className={open ? classes.footerDetails : classes.hide}>
        <Grid container>
          <Grid item sm={6}>
            <Link
              className={classes.footerLinks}
              href="https://mycoitracking.com/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </Grid>
          <Grid item sm={6}>
            <Link className={classes.footerLinks}> Terms & conditions</Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
