import React, { useEffect, useState } from 'react';
import './Inventory.css';
import ReactSlider from 'react-slider';

function Inventory() {
    const [cars, setCars] = useState([]); // Initialize cars state
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [showFilters, setShowFilters] = useState(false);
    const [color, setColor] = useState('');
    const [details, setDetails] = useState('');
    const [error, setError] = useState(null);

    const makes = ['Audi', 'BMW', 'Chevrolet', 'Dodge', 'Ford', 'Honda', 'Hyundai', 'Jaguar', 'Jeep', 'Kia', 'Lexus', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Porsche', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'];
    const models = {
        Nissan: ['Qashqai', 'Altima', 'Rogue', 'Maxima', 'Sentra', 'Pathfinder', 'Murano', 'Frontier', 'Titan', 'Armada'],
        BMW: ['X5', '3 Series', '5 Series', 'X3', 'X1', 'X7', '4 Series', '7 Series', '8 Series', 'Z4'],
        Honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Fit', 'Odyssey', 'Ridgeline', 'Passport', 'HR-V', 'Insight'],
        Hyundai: ['Elantra', 'Santa Fe', 'Tucson', 'Sonata', 'Palisade', 'Venue', 'Kona', 'Ioniq', 'Veloster', 'Accent'],
        Toyota: ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Tacoma', '4Runner', 'Prius', 'Sienna', 'Tundra', 'Avalon'],
        Ford: ['F-150', 'Mustang', 'Explorer', 'Escape', 'Edge', 'Expedition', 'Bronco', 'Ranger', 'Fusion', 'EcoSport'],
        Chevrolet: ['Silverado', 'Malibu', 'Equinox', 'Tahoe', 'Suburban', 'Blazer', 'Traverse', 'Trailblazer', 'Camaro', 'Corvette'],
        Audi: ['A4', 'Q5', 'A6', 'Q7', 'A3', 'A8', 'Q3', 'TT', 'Q8', 'R8'],
        'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC', 'S-Class', 'GLE', 'A-Class', 'GLA', 'CLS', 'GLS', 'G-Class'],
        Volkswagen: ['Golf', 'Jetta', 'Tiguan', 'Passat', 'Atlas', 'ID.4', 'Arteon', 'Taos', 'Beetle', 'Touareg'],
        Subaru: ['Outback', 'Forester', 'Impreza', 'Crosstrek', 'WRX', 'Ascent', 'Legacy', 'BRZ', 'Baja', 'SVX'],
        Mazda: ['Mazda3', 'CX-5', 'Mazda6', 'CX-9', 'CX-30', 'MX-5 Miata', 'CX-3', 'Mazda2', 'RX-8', 'BT-50'],
        Kia: ['Sorento', 'Sportage', 'Optima', 'Soul', 'Telluride', 'Seltos', 'K5', 'Stinger', 'Forte', 'Carnival'],
        Tesla: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster', 'Cybertruck'],
        Lexus: ['RX', 'ES', 'NX', 'GX', 'LS', 'IS', 'UX', 'RC', 'LX', 'LC'],
        Jeep: ['Wrangler', 'Grand Cherokee', 'Cherokee', 'Compass', 'Renegade', 'Gladiator', 'Patriot', 'Commander', 'Liberty', 'Wagoneer'],
        Dodge: ['Charger', 'Challenger', 'Durango', 'Journey', 'Grand Caravan', 'Dart', 'Avenger', 'Magnum', 'Neon', 'Viper'],
        Porsche: ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan', 'Boxster', 'Cayman', '718', 'Carrera', 'Targa'],
        Jaguar: ['XE', 'F-Pace', 'XF', 'XJ', 'E-Pace', 'I-Pace', 'F-Type', 'XK', 'S-Type', 'X-Type'],
        Volvo: ['XC90', 'S60', 'XC60', 'V60', 'XC40', 'V90', 'S90', 'C40', 'V40', 'S80']
    };

    useEffect(() => {
        fetch('/api/cars')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setCars(data))
            .catch(error => setError(error));
    }, []);
    

    const handleMakeChange = (e) => {
        setMake(e.target.value);
        setModel('');
    };

    const handlePriceRangeChange = (value) => {
        setPriceRange(value);
    };

    const formatPriceRange = () => {
        if (priceRange[1] === 100000) {
            return `$${priceRange[0]} - $${priceRange[1]} and up`;
        }
        return `$${priceRange[0]} - $${priceRange[1]}`;
    };

    const resetFilters = () => {
        setMake('');
        setModel('');
        setPriceRange([0, 100000]);
        setColor('');
        setDetails('');
        setShowFilters(false);
    };


    return (
        <div className="inventory">
            <h1 className="title">Vehicles in Stock</h1>
            <div className="inventory-header">
                <div className="row-filters">
                    <label htmlFor="make">Make:</label>
                    <select id="make" value={make} onChange={handleMakeChange}>
                        <option value="">Select Make</option>
                        {makes.map((make) => (
                            <option key={make} value={make}>{make}</option>
                        ))}
                    </select>

                    <label htmlFor="model">Model:</label>
                    <select id="model" value={model} onChange={(e) => setModel(e.target.value)} disabled={!make}>
                        <option value="">Any Model</option>
                        {make && models[make].map((model) => (
                            <option key={model} value={model}>{model}</option>
                        ))}
                    </select>

                    <label htmlFor="priceRange">Price Range:</label>
                    <div className="price-range">
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="thumb"
                            trackClassName="track"
                            min={0}
                            max={100000}
                            value={priceRange}
                            onChange={handlePriceRangeChange}
                            ariaLabel={['Lower thumb', 'Upper thumb']}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        />
                        <span>{formatPriceRange()}</span>
                    </div>
                    <button onClick={resetFilters}>Reset All Filters</button>
                </div>
            </div>
            <div className="inventory-show-case">
                {cars.length > 0 ? (
                    cars.map((car) => (
                        <div className="car-card" key={car._id}>
                            <img src={car.imageUrl} alt={`${car.make} ${car.model}`} />
                            <h3>{car.make} {car.model}</h3>
                            <p>Year: {car.year}</p>
                            <p>Price: ${car.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No cars available</p>
                )}
            </div>
        </div>
    );
}

export default Inventory;