import React from 'react';
import { 
    AppBar, 
    Box, 
    Button, 
    Grid, 
    Hidden, 
    IconButton, 
    makeStyles, 
    Switch, 
    Toolbar,
    Typography,
    useTheme, 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { 
    AccountCircle, 
    Apps, 
    MoreVert, 
    VideoCall, 
} from '@material-ui/icons';
import LogoPreto from './images/preto.png';
import LogoBranco from './images/branco.png';
import Videos from './videos';
import DrawerComponent from './components/drawer';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark,
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
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
        textTransform: 'uppercase',
    }
}));


function Home({darkMode, setDarkMode}) {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        className={classes.menuIcon} 
                        aria-label="menu"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <img 
                        src={theme.palette.type === 'dark' ? LogoBranco : LogoPreto} 
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
                        <VideoCall/>
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <Apps/>
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <MoreVert/>
                    </IconButton>
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        startIcon={<AccountCircle/>}
                    >
                        Fazer Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display="flex">
                <Hidden mdDown>
                   <DrawerComponent classes={classes}/>
                </Hidden>
                <Box p={8}>
                    <Toolbar/>
                    <Typography
                        variant="h5"
                        color="textPrimary"
                        style={{ fontWeight: 800 }}
                        >
                        Recomendados
                    </Typography>

                    <Grid container spacing={4}>
                        {
                            Videos.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                                    <Box>
                                        <img
                                            style={{width: '100%'}}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box>
                                            <Typography
                                                style={{fontWeight: 600}}
                                                gutterBottom
                                                variant="body1"
                                                color="textPrimary"
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                display="block"
                                                variant="body2"
                                                color="textSecondary"
                                            >
                                                {item.channel}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {`${item.views} - ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Home;