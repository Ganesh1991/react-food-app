import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Route } from "react-router-dom";
import { MyContext } from "../Provider/index";

const Admin = ({ classes }) => {
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container className={classes.card}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Admin Setting
          </Typography>
          <React.Fragment>
            <MyContext.Consumer>
              {context => {
                const menuItems = context.state.MenuItems;
                const listItem = menuItems.map(item => {
                  return (
                    <ListItem className={classes.listItem} key={item.id}>
                      <ListItemText primary={item.name} />

                      <TextField
                        required
                        id={item.id}
                        label="New Price"
                        value={item.price}
                        onChange={event =>
                          context.updateProductPrice(item.id, event)
                        }
                      />
                    </ListItem>
                  );
                });
                return (
                  <React.Fragment>
                    {listItem}
                    <br />
                    <Route
                      render={({ history }) => (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            history.push("/menu");
                          }}
                        >
                          Go to Menu
                        </Button>
                      )}
                    />
                  </React.Fragment>
                );
              }}
            </MyContext.Consumer>
          </React.Fragment>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Admin;
