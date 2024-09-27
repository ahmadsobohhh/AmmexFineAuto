import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <div className="dealership-hours">
            <h6>Dealership Hours</h6>
            <ul>
              <li><span className="day">Monday:</span><span className="time">10:00AM - 7:00PM</span></li>
              <li><span className="day">Tuesday:</span><span className="time">10:00AM - 7:00PM</span></li>
              <li><span className="day">Wednesday:</span><span className="time">10:00AM - 7:00PM</span></li>
              <li><span className="day">Thursday:</span><span className="time">10:00AM - 7:00PM</span></li>
              <li><span className="day">Friday:</span><span className="time">10:00AM - 7:00PM</span></li>
              <li><span className="day">Saturday:</span><span className="time">10:00AM - 7:00PM</span></li>
              <li><span className="day">Sunday:</span><span className="time">10:00AM - 6:30PM</span></li>
            </ul>
          </div>
          <div className="address">
            <h6>Address & Contact</h6>
            <p>2931 Bank St, Gloucester, ON K1T 1N7</p>
            <p><a href="tel:613-263-2424" className="telephoneNumber">(613) 263-2424</a></p>
            <p><a href="email:ammexfineauto@gmail.com" className="email">ammexfineauto@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div className="endFooter">
        <h5>2024 Ammex Fine Auto™</h5>
        <h5>Website Developed by Ahmad Soboh</h5>
      </div>
    </footer>
  );
}

export default Footer;