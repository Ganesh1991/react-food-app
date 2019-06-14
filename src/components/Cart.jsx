import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Route } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";

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
    open: false
  };

  getProductName = itemId => {
    const product = this.props.MenuDetails.filter(p => p.id === itemId);
    return product[0].name;
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getCartTotal = () => {
    let totalCost = 0;
    this.props.orderDetails.forEach(item => {
      const product = this.props.MenuDetails.filter(p => p.id === item.id);
      totalCost = totalCost + item.count * product[0].price;
    });
    console.log("totalCost <====>", totalCost);
    return totalCost;
  };

  proceedToCheckOut = () => {
    console.log("Redirecting to checkout page........");
    this.props.history.push("/checkout");
  };

  render() {
    return (
      <React.Fragment>
        <IconButton
          aria-label="Cart"
          style={{ position: "right" }}
          onClick={() => this.setState({ open: true })}
        >
          <StyledBadge badgeContent={this.props.totalItem} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        {this.state.open && (
          <Dialog
            fullWidth={true}
            maxWidth="sm"
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Order Summary</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.props.orderDetails.map(item => {
                  return (
                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        <Typography component="h2">
                          {this.getProductName(item.id)} :
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography component="h3"> {item.count}</Typography>
                      </Grid>
                      <Grid item xs spacing={2}>
                        <Button
                          color="primary"
                          variant="contained"
                          size="small"
                          onClick={() => this.props.addItem(item.id)}
                        >
                          <Add className={this.props.classes.rightIcon} />
                        </Button>
                        <Button
                          color="secondary"
                          variant="contained"
                          size="small"
                          onClick={() => this.props.removeItem(item.id)}
                        >
                          <Remove className={this.props.classes.rightIcon} />
                        </Button>
                      </Grid>
                    </Grid>
                  );
                })}
                <Grid container spacing={1}>
                  <Typography component="h1">
                    Total (INR) : {this.getCartTotal()}
                  </Typography>
                </Grid>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Route
                render={({ history }) => (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      this.handleClose();
                      history.push("/checkout");
                    }}
                  >
                    Save and Checkout
                  </Button>
                )}
              />

              <Button onClick={this.handleClose} color="primary" autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </React.Fragment>
    );
  }
}

export default Cart;
