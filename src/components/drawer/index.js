import React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListSubheader,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  AccountCircle,
  History,
  Home,
  Subscriptions,
  VideoLibrary,
  Whatshot,
} from "@material-ui/icons";
import ListItemComponent from "../listItem";

const DrawerComponent = ({ classes }) => (
  <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <Toolbar />
    <div className={classes.drawerContainer}>
      <List>
        <ListItemComponent classes={classes} icon={<Home />} text="Início" />
        <ListItemComponent
          classes={classes}
          icon={<Whatshot />}
          text="Em alta"
        />
        <ListItemComponent
          classes={classes}
          icon={<Subscriptions />}
          text="Inscrições"
        />
      </List>
      <Divider />
      <List>
        <ListItemComponent
          classes={classes}
          icon={<VideoLibrary />}
          text="Biblioteca"
        />
        <ListItemComponent
          classes={classes}
          icon={<History />}
          text="Histórico"
        />
      </List>
      <Divider />
      <Box p={7}>
        <Typography variant="body2">
          Faça login para curtir vídeos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Fazer login
          </Button>
        </Box>
      </Box>
      <Divider />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            className={classes.subheader}
          >
            O melhor do youtube
          </ListSubheader>
        }
      >
        <ListItemComponent classes={classes} text="Música" />
        <ListItemComponent classes={classes} text="Esportes" />
        <ListItemComponent classes={classes} text="Jogos" />
        <ListItemComponent classes={classes} text="Filmes" />
        <ListItemComponent classes={classes} text="Notícias" />
        <ListItemComponent classes={classes} text="Ao Vivo" />
        <ListItemComponent classes={classes} text="Destaques" />
        <ListItemComponent classes={classes} text="Videos 360" />
      </List>
      <Divider />
      <List>
        <ListItemComponent classes={classes} text="Procurar canais" />
      </List>
      <Divider />
    </div>
  </Drawer>
);

export default DrawerComponent;
