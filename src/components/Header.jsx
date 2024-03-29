import React from "react";
import AppBar from "@material-ui/core/AppBar";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MyContext } from "../Provider/index";

const Cart = React.lazy(() => import("./Cart"));

const Header = ({ classes, showCart }) => (
  <AppBar position="relative">
    <Toolbar>
      <RestaurantIcon className={classes.icon} />
      <Typography
        variant="h6"
        color="inherit"
        noWrap
        className={classes.header}
      >
        Fred's Restaurant
      </Typography>
      {showCart && (
        <React.Fragment>
          <MyContext.Consumer>
            {context => {
              const orderedItem = context.state.orderDetails.length;
              if (orderedItem > 0) {
                return (
                  <React.Suspense fallback={null}>
                    <Cart
                      totalItem={orderedItem}
                      classes={classes}
                      orderDetails={context.state.orderDetails}
                      MenuDetails={context.state.MenuItems}
                      addItem={context.addItem}
                      removeItem={context.removeItem}
                    />
                  </React.Suspense>
                );
              } else return null;
            }}
          </MyContext.Consumer>
        </React.Fragment>
      )}
    </Toolbar>
  </AppBar>
);

export default Header;
