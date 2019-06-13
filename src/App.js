import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import { MyProvider } from "./Provider/index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  },
  header: {
    display: "inline",
    width: "90%"
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

const Footer = React.lazy(() => import("./components/Footer"));
const Layout = React.lazy(() => import("./layout/Public"));
const Menu = React.lazy(() => import("./containers/Menu"));

const App = props => {
  const comp = props.component;
  const classes = useStyles();
  return (
    <div className="App">
      <MyProvider>
        <CssBaseline />
        <Header classes={classes} />
        {comp === "Layout" && (
          <React.Suspense fallback={null}>
            <Layout classes={classes} />
          </React.Suspense>
        )}
        {comp === "Menu" && (
          <React.Suspense fallback={null}>
            <Menu classes={classes} />
            <Footer classes={classes} />
          </React.Suspense>
        )}
      </MyProvider>
    </div>
  );
};

export default App;
