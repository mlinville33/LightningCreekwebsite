/**
 * Software Development page
 */

import React, { useState } from "react";
import styles from './SoftwarePage.module.css';
import SoftwareFormModal from "../forms/SoftwareFormModal";

const Software = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    return (
        <div className={`${isModalOpen ? styles.blurred : ''} `}>
            <div className={styles.header}>Software Creation</div>
            <div className={styles.bodyContainer}>
                <div className={styles.textContainer}>
                    <p>
                        At Lightning Creek, we are committed to delivering innovative,
                        high-quality software solutions for our clients. As leaders in software design and development, 
                        we harness the latest technologies to create exceptional programs that drive results and exceed expectations.
                    </p>
                </div>
                <div className={styles.textContainer}>
                    <p>
                        For website creation press the button below and fill out the form:
                    </p>
                </div>
                <div className={styles.textContainer}>
                    <p>
                        For inquiries about software development and creation press the button below and fill out the form:
                    </p>
                    <SoftwareFormModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
                </div>
            </div>

        </div>
    );
};

export default Software;