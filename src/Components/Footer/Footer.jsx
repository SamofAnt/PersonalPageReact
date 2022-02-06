import React from 'react';
import classes from './Footer.module.css'

class Footer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer className={classes.pageFooter}>
                <div className={classes.container}>
                    <a href="tel:+79153560898" className={classes.footerPhone}>тел. +7(915)-356-0898</a>
                    <a href="https://github.com/SamofAnt" target="_blank" className={classes.footerGithub}>Мой GitHub</a>
                    <a href="mailto:samofalov.20022805@gmail.com" className={classes.footerEmail}>samofalov.20022805@gmail.com</a>
                </div>
            </footer>
        );
    }
}
export default Footer;