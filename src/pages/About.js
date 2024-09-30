import React from 'react';
import './About.css'; // Ensure the path is correct
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <div
                className="aboutPageBackGround"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/aboutPageBackground.jpg)` }}
            >
                <h4>About Us</h4>
                <h1 className='aboutPageh1'>Ammex Fine Auto</h1>
                <div className="aboutContent">
                    <p>
                        Welcome to Ammex Fine Auto, where our commitment to quality and customer satisfaction is our top priority. 
                        We offer a wide range of vehicles to suit every need and budget. Our team of experienced professionals is 
                        dedicated to providing you with the best car buying experience possible.
                    </p>
                    <p>
                        At Ammex Fine Auto, we believe in transparency and integrity. Our goal is to build long-lasting relationships 
                        with our customers by providing exceptional service and high-quality vehicles. Thank you for choosing us for 
                        your automotive needs.
                    </p>
                </div>
            </div>
            <div className='teamSection'>
                <h2>Meet Our Team</h2>
                <div className="teamContainer">
                    <div className="teamMember">
                        <img src={`${process.env.PUBLIC_URL}/hassanDahrouj.jpeg`} alt="Hassan Dahrouj" />
                        <p>Hassan Dahrouj</p>
                    </div>
                    <div className="teamMember">
                        <img src={`${process.env.PUBLIC_URL}/omarDahrouj.jpeg`} alt="Omar Dahrouj" />
                        <p>Omar Dahrouj</p>
                    </div>
                    <div className="teamMember">
                        <img src={`${process.env.PUBLIC_URL}/teamMember3.jpeg`} alt="Team Member 3" />
                        <p>Bashar (LastName) </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;