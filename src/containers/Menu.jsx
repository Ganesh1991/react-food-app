import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MenuList from "../components/MenuList";
import { MyContext } from "../Provider/index";

const Menu = props => {
  const classes = props.classes;
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        <MyContext.Consumer>
          {context => {
            return (
              <MenuList
                classes={classes}
                list={context.state.MenuItems}
                addItem={context.addItem}
                removeItem={context.removeItem}
                orderDetails={context.state.orderDetails}
              />
            );
          }}
        </MyContext.Consumer>
      </Grid>
    </Container>
  );
};

export default Menu;
