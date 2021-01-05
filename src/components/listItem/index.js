import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const ListItemComponent = ({ classes, icon, text }) => (
  <ListItem button classes={{ root: classes.listItem }}>
    <ListItemIcon>{icon ? icon : <AddCircleIcon/> }</ListItemIcon>
    <ListItemText
      classes={{
        primary: classes.listItemText,
      }}
      primary={text}
    />
  </ListItem>
);

export default ListItemComponent;
