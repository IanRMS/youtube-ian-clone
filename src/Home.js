import React from "react";
import { Box, Hidden, makeStyles, useTheme } from "@material-ui/core";

import DrawerComponent from "./components/drawer";
import AppbarComponent from "./components/appbar";
import ContentComponent from "./components/content";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  logo: {
    height: 26,
  },
  grow: {
    flexGrow: 1,
  },
  subheader: {
    textTransform: "uppercase",
  },
}));

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AppbarComponent
        classes={classes}
        theme={theme}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Box display="flex">
        <Hidden mdDown>
          <DrawerComponent classes={classes} />
        </Hidden>
        <ContentComponent />
      </Box>
    </div>
  );
}

export default Home;
