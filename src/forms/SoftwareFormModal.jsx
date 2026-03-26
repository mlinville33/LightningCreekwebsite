/**
 * Form for submitting a software development inquiry
 */

import React, { useState } from "react";
import Modal from 'react-modal';
import styles from './forms.module.css'

Modal.setAppElement('#root');

const SoftwareFormModal = ({ isOpen, setIsOpen }) => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Mock firing an event until backend is set up! :)')
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Contact Us</button>
            <Modal 
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                className={styles.form}
                // overlayClassName={styles.formOverlay}
                contentLabel="Contact Form">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <input name='name' placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <input name='email' placeholder="Your email" value={formData.email} onChange={handleChange} required />
                    <textarea name='message' placeholder="Your request" value={formData.message} onChange={handleChange} required />
                    <button type='submit'>Submit</button>
                </form>
            </Modal>
        </>
    )
};

export default SoftwareFormModal