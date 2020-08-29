import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import uuid from 'react-uuid'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    title: {
        fontSize: '5vw',
        textAlign: "center",
        flexGrow: 1,
        background: '#195473',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root} id="burgerMenu">

            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>

            </Toolbar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Typography variant="h6" className={classes.title}>
                        <a href='/' style={{ color: "white", textDecoration: 'none' }} >MED.AM</a>
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List key ={uuid()}>

                    {[<Button href='/'>ԳԼԽԱՎՈՐ</Button>,
                    <Button href="#text-buttons" >ՏԵՍԱԿԱՆԻ</Button>,
                    <Button href="#text-buttons" >ՄԵՐ ՄԱՍԻՆ</Button>,
                    <Button href="#text-buttons" >ԱՌՑԱՆՑ ԲԺԻՇԿ</Button>,
                    <Button href="#text-buttons" >ԿԱՊ</Button>].map((text) => (
                        <ListItem button key={uuid()}>
                            <ListItemText primary={text} key={uuid()} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List key={uuid()}>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={uuid()}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
