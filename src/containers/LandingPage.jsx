import React from "react";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const LandingPage = ({ classes }) => (
  <main>
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome to Fred's Kitchen
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
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
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
    <Container className={classes.cardGrid} maxWidth="md" />
  </main>
);

export default LandingPage;
