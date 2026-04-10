/**
 * CTACard that contains an image and a call-to-action button.
 * @param {Object} props - Component properties
 */
import React from "react";
import styles from './CTACard.module.css';
import CTAButton from "./CTAButton";

const CTACard = ({ imageSrc, text, description, altText, buttonText, onButtonClick }) => {
    return (
        <div className={styles.ctaCard}>
            <img src={imageSrc} alt={altText} className={styles.ctaImage} loading="lazy" />
            <div className={styles.textContainer}>
                {text}
            </div>
            <div className={styles.descriptionContainer}>
                {description}
            </div>
            <div className={styles.buttonContainer}>
                <CTAButton text={buttonText} onClick={onButtonClick} />
            </div>
        </div>
    );
};

export default CTACard;
