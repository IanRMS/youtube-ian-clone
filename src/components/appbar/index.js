import React from "react";
import { AppBar, Button, IconButton, Switch, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import LogoPreto from "../../images/preto.png";
import LogoBranco from "../../images/branco.png";
import { AccountCircle, Apps, MoreVert, VideoCall } from "@material-ui/icons";

const AppbarComponent = ({ classes, theme, darkMode, setDarkMode }) => (
  <AppBar color="inherit" className={classes.appBar}>
    <Toolbar>
      <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <img
        src={theme.palette.type === "dark" ? LogoBranco : LogoPreto}
        className={classes.logo}
        alt=""
      />
      <div className={classes.grow} />
      <Switch
        value={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className={classes.icon}
      />
      <IconButton className={classes.icons}>
        <VideoCall />
      </IconButton>
      <IconButton className={classes.icons}>
        <Apps />
      </IconButton>
      <IconButton className={classes.icons}>
        <MoreVert />
      </IconButton>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<AccountCircle />}
      >
        Fazer Login
      </Button>
    </Toolbar>
  </AppBar>
);

export default AppbarComponent;
