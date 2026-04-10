import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './ServicesPage.module.css';
import CTAButton from "../components/CTAButton";

const services = [
    {
        id: 'custom-software',
        title: 'Custom Software Solutions',
        description: 'We design and build custom software tailored to your business needs. From internal tools to customer-facing platforms, our team delivers scalable, maintainable solutions using modern technologies.',
        accent: '#02aefd',
    },
    {
        id: 'website-creation',
        title: 'Website Creation',
        description: 'We create fast, secure, and responsive websites that make an impact. Whether you need a landing page or a full web application, we build with performance and user experience at the forefront.',
        accent: '#53a8b6',
    },
    {
        id: 'aws-management',
        title: 'AWS Resource Management',
        description: 'We help you manage your AWS infrastructure for optimal performance and cost efficiency. From architecture reviews to hands-on resource management, we keep your cloud running smoothly.',
        accent: '#007bff',
    },
    {
        id: 'dashboard-creation',
        title: 'Dashboard Creation & Management',
        description: 'We build custom dashboards that turn your data into actionable insights. From real-time analytics to executive reporting, we design intuitive interfaces that help you monitor, measure, and make informed decisions.',
        accent: '#5a189a',
    },
    {
        id: 'mobile-development',
        title: 'Mobile App Development',
        description: 'We develop native and cross-platform mobile applications for iOS and Android. From concept to App Store and Google Play, we build polished, high-performance apps that your users will love.',
        accent: '#2d6a4f',
    },
];

const ServicesPage = () => {
    const navigate = useNavigate();

    return (
        <main className={styles.container}>
            <section className={styles.hero}>
                <h1>Our Services</h1>
                <p className={styles.subtitle}>
                    Lightning Creek delivers innovative software solutions, modern websites, and expert cloud management for businesses of all sizes.
                </p>
            </section>
            <div className={styles.cardGrid}>
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={styles.serviceCard}
                        style={{ borderTopColor: service.accent }}
                    >
                        <h2 className={styles.cardTitle}>{service.title}</h2>
                        <p className={styles.cardDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
            <div className={styles.ctaSection}>
                <CTAButton text="Get in touch" onClick={() => navigate('/contact')} />
            </div>
        </main>
    );
};

export default ServicesPage;
