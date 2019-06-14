import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { MyContext } from "../Provider/index";

const Review = props => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <MyContext.Consumer>
          {context => {
            const orderDetails = context.state.orderDetails;
            let totalPrice = 0;
            const listItem = orderDetails.map(item => {
              const product = context.state.MenuItems.filter(
                p => p.id === item.id
              );
              const productCost = product[0].price * item.count;
              totalPrice = totalPrice + productCost;
              return (
                <ListItem className={props.classes.listItem} key={product.name}>
                  <ListItemText primary={product[0].name} />
                  <Typography variant="body2">{productCost}</Typography>
                </ListItem>
              );
            });
            return (
              <React.Fragment>
                {listItem}
                <br />
                <ListItem className={props.classes.listItem} key="TotalList">
                  <ListItemText primary="Total" />
                  <Typography variant="body2">{totalPrice}</Typography>
                </ListItem>
              </React.Fragment>
            );
          }}
        </MyContext.Consumer>
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={props.classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {`${props.addressDetails.firtname} ${
              props.addressDetails.lastname
            }`}
          </Typography>
          <Typography gutterBottom>{props.addressDetails.address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={props.classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment key={props.paymentDetails.cardName}>
              <Grid item xs={6}>
                <Typography gutterBottom>Card name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {props.paymentDetails.cardName}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Card number</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {props.paymentDetails.cardNumber}
                </Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;
