import React, { useState } from 'react';
import './Contact.css'; // Ensure the path is correct

function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Email:', email);
        console.log('Message:', message);
        // Reset form fields
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <div
                className="contactPageBackGround"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/contactPageBackground.jpg)` }}
            >
                <h4>Contact Us</h4>
                <h1 className='contactPageh1'>Ammex Fine Auto</h1>
                <div className="contactContent">
                    <form onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;