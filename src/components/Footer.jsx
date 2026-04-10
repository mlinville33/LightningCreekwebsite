/**
 * A footer component that sticks to the bottom of the page.
 * Provides links to the home page, software page, and contact page.
 * Created by Michael Linville 7/11/2024
 */

import React from "react";
import { Link } from "react-router-dom";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footerLinks} aria-label="Footer navigation">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
            <div className={styles.footerText}>
                &copy; {new Date().getFullYear()} Lightning Creek LLC. All rights reserved.
            </div>
        </footer>
    )
};

export default Footer;
