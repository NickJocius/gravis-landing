import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from '@material-ui/core';
import backgroundImage from '../../assets/images/1920x1080.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            height: '80vh',
            minHeight: 500,
            maxHeight: 1300,
        },
    },
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
    },
    button: {
        minWidth: 200,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        transition: theme.transitions.create(['transform', 'color', 'backgroundColor'], {
            duration: theme.transitions.duration.complex,
            easing: theme.transitions.easing.easeInOut,
        }),
        "&:hover": {
            transform: 'scale(1.1)',
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.common.black,
        },
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
        },
    },
    more: {
        marginTop: theme.spacing(2),
    },
    backdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.5,
        zIndex: -1,
    },
}));

const LandingHero = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Landing Page Call to Action
            </Typography>
            <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                One liner to draw the user in.
            </Typography>
            <Button
                variant="contained"
                size="large"
                className={classes.button}
                component="a"
                href="#"
            >
                Register
            </Button>
            <Typography variant="body2" color="inherit" className={classes.more}>
                 Discover More
            </Typography>
                <div className={classes.backdrop} />
                <div className={classes.background} />
            </Container>
        </section>
    );
};

export default LandingHero;
