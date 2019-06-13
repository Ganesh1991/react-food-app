import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "50%",
    right: -3,
    color: "white",
    background: "gray",
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
}))(Badge);

class Cart extends React.Component {
  state = {
    anchorEl: false
  };

  handleClose = () => {
    this.setState({ anchorEl: false });
  };

  render() {
    const anchorEl = this.state.anchorEl;
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : null;
    return (
      <React.Fragment>
        <IconButton
          aria-label="Cart"
          style={{ position: "right" }}
          onClick={() => this.setState({ anchorEl: true })}
        >
          <StyledBadge badgeContent={this.props.totalItem} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
        >
          <Typography className={this.props.classes.typography}>
            The content of the Popover.
          </Typography>
        </Popover>
      </React.Fragment>
    );
  }
}

export default Cart;
