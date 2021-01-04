import React from 'react';
import { 
    Box, 
    Button, 
    Divider, 
    Drawer, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    ListSubheader, 
    Toolbar, 
    Typography
} from '@material-ui/core';
import { 
    AccountCircle, 
    History, 
    Home, 
    Subscriptions, 
    VideoLibrary, 
    Whatshot
} from '@material-ui/icons';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const DrawerComponent = ({classes}) => (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
        paper: classes.drawerPaper
        }}
    >
        <Toolbar />
        <div className={classes.drawerContainer}>
            <List>
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<Home/>}</ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} primary={'Início'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<Whatshot/>}</ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} primary={'Em alta'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<Subscriptions/>}</ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} 
                        primary={'Inscrições'} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<VideoLibrary/>}</ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} primary={'Biblioteca'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<History/>}</ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} primary={'Histórico'} />
                </ListItem>
            </List>
            <Divider/>
            <Box p={7}>
                <Typography variant="body2">
                    Faça login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                    <Button
                        variant="outlined"
                        color="secondary" 
                        startIcon={<AccountCircle/>}
                    >
                        Fazer login
                    </Button>
                </Box>
            </Box>
            <Divider/>
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
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>
                        <AddCircleIcon/>
                    </ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} primary={'Música'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>
                        <AddCircleIcon/>
                    </ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} primary={'Esportes'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>
                        <AddCircleIcon/>
                    </ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} primary={'Jogos'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>
                        <AddCircleIcon/>
                    </ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} primary={'Filmes'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>
                        <AddCircleIcon/>
                    </ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} primary={'Notícias'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>
                        <AddCircleIcon/>
                    </ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} primary={'Ao vivo'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>
                        <AddCircleIcon/>
                    </ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} primary={'Destaques'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>
                        <AddCircleIcon/>
                    </ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }} primary={'Videos 360'} />
                </ListItem>
            </List>
            <Divider/>
                <List>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>
                            <AddCircleIcon/>
                        </ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Procurar canais'} />
                    </ListItem>
                </List>
            <Divider/>
        </div>
    </Drawer>
)

export default DrawerComponent;