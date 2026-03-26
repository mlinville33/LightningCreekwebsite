/**
 * A footer component that sitcks to the bottom of the page
 * Provides links to the home page, software page, and contact page.
 * Created by Michael Linville 7/11/2024
 */

import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        // Need a parent container that holds all links
        <div className={styles.footer}> 
            <div className={styles.footerLinks}>
                <a href="/">Home</a>
                <a href="/software">Software</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className={styles.footerText}>
                &copy; {new Date().getFullYear()} Lightning Creek LLC. All rights reserved.
            </div>
        </div>
    )
};

export default Footer;