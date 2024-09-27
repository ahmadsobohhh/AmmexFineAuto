import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="nav">
        <Link to="/">
            <img src="./ammexlogo.png" className='logo'></img>  
        </Link>
            <ul>
                <li className="active"><Link to="/">Home</Link></li>
                <li className="active"><Link to="/Inventory">Inventory</Link></li>
                <li className="active"><Link to="/About">About</Link></li>
                <li className="active"><Link to="/Contact">Contact</Link></li>
                <img src="line.png"></img>
                <a href="https://www.facebook.com/ammexfineauto/"> <img src="facebook.png" class="facebookicon"></img> </a>
            </ul>
        </nav>
    );
}

export default Navbar;