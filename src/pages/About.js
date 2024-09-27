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
                        <img src={`${process.env.PUBLIC_URL}/teamMember1.jpg`} alt="Team Member 1" />
                        <h3>H</h3>
                        <p>CEO</p>
                    </div>
                    <div className="teamMember">
                        <img src={`${process.env.PUBLIC_URL}/teamMember2.jpg`} alt="Team Member 2" />
                        <h3>Jane Smith</h3>
                        <p>Sales Manager</p>
                    </div>
                    <div className="teamMember">
                        <img src={`${process.env.PUBLIC_URL}/teamMember3.jpg`} alt="Team Member 3" />
                        <h3>Mike Johnson</h3>
                        <p>Service Manager</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;