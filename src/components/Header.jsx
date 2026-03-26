/**
 * Header component for Lightning Creek website
 * Created by Michael Linville 7/11/2024
 * Last modified 7/11/2024
 * Copyright Lightning Crrek LLC.
 */

import React from "react";
import styles from './Header.module.css';
import logo from '../public/BlueLogo.png'
// import { Link } from "react-router-dom";

const Header = () => {
    // const [hoveredCategory, setHoveredCategory] = useState(null);

    // const handleMouseEnter = (category) => {
    //     setHoveredCategory(category);
    // };

    // const handleMouseLeave = () => {
    //     setHoveredCategory(null);
    // };

    // const categories = [
    //     {
    //         id: 'Home',
    //         path: '/'
    //     },
    //     {
    //         id: 'Software',
    //         path: '/software'
    //     }
    // ]

    return (
        // Top level div needs to be sticky to the top of the page
        // Lower level divs should stick their placement relative to each other
      <div className={styles.header}>
        {/* {categories.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            className={`${styles.categories} ${hoveredCategory === category.id ? styles.hovered : ''}`}
            onMouseEnter={() => handleMouseEnter(category.id)}
            onMouseLeave={handleMouseLeave}
          >
            {category.id}
          </Link>
        ))} */}
        <img src={logo} className={styles.logo} alt="logo" />
        <div className={styles.siteTitle}>
          <span className={styles.siteText}>Lightning Creek</span>
        </div>
      </div>
    )
};

export default Header;