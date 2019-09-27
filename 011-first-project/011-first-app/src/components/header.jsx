import React from 'react';
import classes from './header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
          <img src="http://cdn-images.mailchimp.com/template_images/logo_nmcux.png"/>
        </header>
    )
}

export default Header;