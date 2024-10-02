import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Inventory from './pages/Inventory';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Inventory" element={<Inventory />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Admin" element={<Admin />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;