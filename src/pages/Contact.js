import React from 'react';
import './Contact.css'; // Ensure the path is correct

function Contact() {
    return (
        <>
            <div
                className="contactPageBackGround"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/contactPageBackground.jpg)` }}
            >
                <div className="contactContent">
                    <div className="contactInfo">
                        <p><strong>Phone:</strong> (613) 263-2424</p>
                        <p><strong>Email:</strong> ammexfineauto@gmail.com</p>
                        <p><strong>Address:</strong> 2931 Bank St, Gloucester, ON K1T 1N7</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;