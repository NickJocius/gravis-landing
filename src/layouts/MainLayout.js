import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MenuBar from '../components/MenuBar/MenuBar';
import Footer from '../components/Footer/Footer';
import {CssBaseline} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
}));

const MainLayout = ({ children }) => {
    const classes = useStyles();
    return (
        <>
            <MenuBar />
            <main className={classes.root}>
                <CssBaseline/>
                {children}
            </main>
            <Footer/>
        </>
    )
};

export default MainLayout;
