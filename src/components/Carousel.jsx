import React from "react";
import styles from './Carousel.module.css';

const Carousel = ({ images, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isFading, setIsFading] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);

    React.useEffect(() => {
        if (isPaused) return;

        const timer = setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setIsFading(false);
            }, 400);
        }, interval);

        return () => clearTimeout(timer);
    }, [currentIndex, images.length, interval, isPaused]);

    const goToIndex = (index) => {
        if (index === currentIndex) return;
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsFading(false);
        }, 400);
    };

    const headers = [
        'Lightning fast solutions',
        'Cost efficient resources',
        'Top of the line software'
    ];

    const bodyText = [
        'Creating world class software using leading \n industry standards',
        'Utilizing extensive knowledge in cloud based \n production services',
        'Providing top tier software solutions for your \n business needs'
    ];

    return (
        <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={styles.carouselWrapper}
        >
            <div
                className={`${styles.carouselContainer} ${isFading ? styles.fading : ''}`}
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
                role="region"
                aria-label="Image carousel"
                aria-live="polite"
            >
                <div className={styles.carouselContent}>
                    <h2>{headers[currentIndex]}</h2>
                    <p>{bodyText[currentIndex]}</p>
                </div>
            </div>
            <div className={styles.carouselIndicators} role="tablist" aria-label="Carousel slides">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        role="tab"
                        aria-selected={index === currentIndex}
                        aria-label={`Go to slide ${index + 1}`}
                        className={index === currentIndex ? `${styles.indicator} ${styles.active}` : styles.indicator}
                        onClick={() => goToIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
};

export default Carousel;
