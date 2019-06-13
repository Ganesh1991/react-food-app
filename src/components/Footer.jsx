import React from "react";
import Typography from "@material-ui/core/Typography";

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <Typography variant="h6" align="center" gutterBottom />
    <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary"
      component="p"
    >
      @{new Date().getFullYear()}
    </Typography>
  </div>
);

export default Footer;
