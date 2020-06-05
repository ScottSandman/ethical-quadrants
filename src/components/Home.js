import React from "react";
import { Router, Link } from "@reach/router";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";

import Video from "./Video";
import GetStarted from "./GetStarted";
import Assessment from "./Assessment";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Resources from "./Resources";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    justifyContent: "center",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginRight: drawerWidth,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="h6" noWrap>
            Your E<sup>th</sup>Q: The Ethics Quadrant Project
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="right"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="get-started">
              <ListItemText primary="How to Get Started" />
            </ListItem>
            <ListItem button component={Link} to="assessment">
              <ListItemText primary="The Assessment" />
            </ListItem>
            <ListItem button component={Link} to="testimonials">
              <ListItemText primary="Testimonials" />
            </ListItem>
            <ListItem button component={Link} to="pricing">
              <ListItemText primary="Pricing" />
            </ListItem>
            <ListItem button component={Link} to="resources">
              <ListItemText primary="Resources" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

        <Router>
          <Video path="/" />
          <GetStarted path="get-started" />
          <Assessment path="assessment" />
          <Testimonials path="testimonials" />
          <Pricing path="pricing" />
          <Resources path="resources" />
        </Router>
      </main>
    </div>
  );
};

export default Home;
