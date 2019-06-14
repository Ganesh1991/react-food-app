import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/admin" render={() => <App component="Admin" />} />
        <Route
          exact
          path="/checkout"
          render={() => <App component="CheckOut" />}
        />
        <Route exact path="/menu" render={() => <App component="Menu" />} />
        <Route exact path="/home" render={() => <App component="Layout" />} />
        <Route exact path="/" render={() => <App component="Layout" />} />
      </Switch>
    );
  }
}

export default Routes;
