/**
 * Header component for Lightning Creek website
 * Created by Michael Linville 7/11/2024
 * Copyright Lightning Creek LLC.
 */

import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
    return (
      <header className={styles.header}>
        <div className={styles.siteTitle}>
          <Link to="/" className={styles.siteText}>Lightning Creek</Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/services" className={styles.navLink}>Services</Link>
          <Link to="/contact" className={styles.navLink}>Contact Us</Link>
          <Link to="/demo" className={styles.navLink}>Demos</Link>
        </nav>
      </header>
    )
};

export default Header;
