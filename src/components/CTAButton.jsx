import React from "react";
import styles from './CTAButton.module.css';

/**
 * Call to action button component
 * @param {Object} props - Component properties
 * @param {string} props.text - Button text
 * @param {Function} props.onClick - Click handler function
 */
const CTAButton = ({ text, onClick }) => {
    return (
        <button className={styles.ctaButton} onClick={onClick}>
            {text}
        </button>
    );
};

export default CTAButton;