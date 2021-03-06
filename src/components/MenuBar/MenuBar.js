import React from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Toolbar,
    Typography,
    useScrollTrigger,
    Slide,
    IconButton,
    Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuListItem from './MenuListItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    title: {
        flexGrow: 1
    }
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({threshold: 50});
  
    return (
      <Slide appear={false} direction="down" in={!trigger} >
        {children}
      </Slide>
    );
}
HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    
  };

const MenuBar = (props) => {
    const classes = useStyles();
    return (
        <nav className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar >
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>Gravis</Typography>
                        <Button >Album</Button>
                        <Button >Pricing</Button>
                        <MenuListItem title="Forms"/>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </nav>
    );
};

export default MenuBar;
