import React from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Toolbar,
    Typography,
    useScrollTrigger,
    Slide
} from '@material-ui/core';

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({threshold: 50});
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}
HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    
  };

const MenuBar = (props) => {
    return (
        <>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">Scroll to Hide App Bar</Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </>
    );
};

export default MenuBar;
