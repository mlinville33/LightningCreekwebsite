import React from "react";
import { Link } from "react-router-dom";
import styles from './ContactPage.module.css';

const ContactPage = () => {
    return (
        <main className={styles.container}>
            <section className={styles.hero}>
                <h1>Get In Touch</h1>
                <p className={styles.subtitle}>
                    Have a project in mind or a question about our services? We'd love to hear from you.
                </p>
            </section>

            <div className={styles.cardGrid}>
                <div className={styles.card}>
                    <div className={styles.cardIcon}>&#9993;</div>
                    <h2>Email Us</h2>
                    <p>Send us a message and we'll get back to you within 24 hours.</p>
                    <a href="mailto:lightningcreekgroup@gmail.com" className={styles.cardLink}>
                        lightningcreekgroup@gmail.com
                    </a>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardIcon}>&#128172;</div>
                    <h2>Let's Talk</h2>
                    <p>Ready to start your project? Tell us what you need and we'll put together a plan.</p>
                    <a href="mailto:lightningcreekgroup@gmail.com?subject=Project%20Inquiry" className={styles.cardLink}>
                        Start a conversation
                    </a>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardIcon}>&#128736;</div>
                    <h2>Our Services</h2>
                    <p>Explore what we offer — from custom software to cloud management.</p>
                    <Link to="/services" className={styles.cardLink}>
                        View services
                    </Link>
                </div>
            </div>

            <section className={styles.cta}>
                <p>We typically respond within one business day.</p>
            </section>
        </main>
    );
};

export default ContactPage;
