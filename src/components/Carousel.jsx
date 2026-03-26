import React from "react";
import styles from './Carousel.module.css';

const Carousel = ({ images, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        const timer = setTimeout(() => setCurrentIndex(nextIndex), interval);
        return () => clearTimeout(timer);
    }, [currentIndex, images.length, interval]);

    const goToIndex = (index) => {
        setCurrentIndex(index);
    };

    const headers = [
        'Lightning fast solutions',
        'Cost efficient resources',
        'Top of the line software'
    ];
    const currentHeader = headers[currentIndex];

    const bodyText = [
        'Creating world class software using leading \n industry standards',
        'Utilizing extensive knowledge in cloud based \n production services',
        'Providing top tier software solutions for your \n business needs'
    ];
    const currentBodyText = bodyText[currentIndex];

    return (
        <>
            <div className={styles.carouselContainer}
                style={{ backgroundImage: `url(${images[currentIndex]})` }}>
                <div className={styles.carouselContent}>
                    <h2>{currentHeader}</h2>
                    <p>
                        {currentBodyText}
                    </p>
                </div>
            </div>
            <div className={styles.carouselIndicators}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentIndex ? `${styles.indicator} ${styles.active}` : styles.indicator}
                        onClick={() => goToIndex(index)}
                    />
                ))}
            </div>
        </>
    )
};

export default Carousel;