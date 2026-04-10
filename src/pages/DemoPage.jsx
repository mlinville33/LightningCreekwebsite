import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './DemoPage.module.css';

const demos = [
    {
        id: 'cfaTimer',
        name: 'CFA Timer',
        description: 'Cooking timers for Chick-fil-A menu items.',
        path: '/demo/cfaTimer',
    },
];

const DemoPage = () => {
    const navigate = useNavigate();

    return (
        <main className={styles.container}>
            <h1>App Demos</h1>
            <p className={styles.subtitle}>Try out our demo applications.</p>
            <div className={styles.demoGrid}>
                {demos.map((demo) => (
                    <button
                        key={demo.id}
                        className={styles.demoCard}
                        onClick={() => navigate(demo.path)}
                    >
                        <h2>{demo.name}</h2>
                        <p>{demo.description}</p>
                    </button>
                ))}
            </div>
        </main>
    );
};

export default DemoPage;
