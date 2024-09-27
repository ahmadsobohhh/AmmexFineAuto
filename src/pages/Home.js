import React, { useEffect } from 'react';
import './Home.css'; // Ensure the path is correct
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <div
                className="homePageBackGround"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/homePageCar.jpg)` }}
            >
                <h4>Welcome To</h4>
                <h1 className='homePageh1'>Ammex Fine Auto</h1>
                <div className="boxContainer">
                    <Link to="/Inventory">
                        <div
                            id="box1"
                            className="box"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/inventory.jpg)` }}
                        >
                            <img src="caricon.png" className="icons" alt="Car Icon"></img>
                            <h3>View Inventory</h3>
                            <h4 className="boxh4">Browse from our selection of cars!</h4>
                        </div>
                    </Link>
                    <Link to="/Contact">
                        <div
                            id="box2"
                            className="box"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/selling.jpg)` }}
                        >
                            <img src="moneyicon.png" className="icons" alt="Money Icon"></img>
                            <h3>Sell Us Your Car</h3>
                            <h4 className="boxh4">Get the highest value for your trade in!</h4>
                        </div>
                    </Link>
                    <Link to="/About">
                        <div
                            id="box3"
                            className="box"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/familywithcar.jpg)` }}
                        >
                            <img src="fivestarsicon.png" className="icons" alt="Five Stars Icon"></img>
                            <h3>5 Star Rating</h3>
                            <h4 className="boxh4">Our commitment to quality shines through in our five-star rating—your satisfaction is our priority!</h4>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='black-border'>

            </div>
            <div
                className='customerReviews'
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/reviewBackground.jpg)` }}
            >
                <div className="elfsight-app-ea429655-4529-4d3f-8297-9547e093bc1a" data-elfsight-app-lazy></div>
            </div>
            <div className='black-border'>

            </div>
            <div className='googleMaps'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.513273217198!2d-75.63456768450052!3d45.35461497909914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b9b5e7e5d1%3A0x4b8b5b5b5b5b5b5b!2s2931%20Bank%20St%2C%20Gloucester%2C%20ON%20K1T%201N7%2C%20Canada!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                ></iframe>
            </div>
        </>
    );
}

export default Home;