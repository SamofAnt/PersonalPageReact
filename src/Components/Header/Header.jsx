import React from 'react';
import classes from './Header.module.css'

class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header className={classes.pageHeader}>
                <div className={classes.container}>
                    <a href="tel:+79153560898" className={classes.headerPhone}>тел. +7(915)-356-0898</a>
                    <a href="https://github.com/SamofAnt" target="_blank" className={classes.headerGithub}>Мой GitHub</a>
                    <a href="mailto:samofalov.20022805@gmail.com" className={classes.headerEmail}>samofalov.20022805@gmail.com</a>
                </div>

            </header>
        );
    }
}

export default Header;