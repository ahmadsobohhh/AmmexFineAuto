import React, { useState, useEffect } from "react";
import "./Admin.module.css";

function Admin() {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [message, setMessage] = useState(null);
    const [vehicleId, setVehicleId] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cars, setCars] = useState([]);

    const ADMIN_USERNAME = process.env.REACT_APP_ADMIN_USERNAME;
    const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;
    
    

    useEffect(() => {
        if (isAuthenticated) {
            fetchCars();
        }
    }, [isAuthenticated]);

    const fetchCars = () => {
        fetch("/api/cars")
            .then((response) => response.json())
            .then((data) => setCars(data))
            .catch((error) => setMessage(error.message));
    };

    const fetchCarDetails = (id) => {
        fetch(`/api/cars/${id}`)
            .then((response) => {
                if (!response.ok) throw new Error("Vehicle not found");
                return response.json();
            })
            .then((car) => {
                setMake(car.make);
                setModel(car.model);
                setYear(car.year);
                setPrice(car.price);
                setImageFile(null); // Reset image file
            })
            .catch((error) => setMessage(error.message));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
        } else {
            setMessage("Invalid username or password");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("make", make);
        formData.append("model", model);
        formData.append("year", year);
        formData.append("price", price);
        formData.append("imageFile", imageFile);

        fetch("/api/cars", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (!response.ok) throw new Error("Failed to create vehicle");
                return response.json();
            })
            .then(() => {
                setMessage("Vehicle created successfully!");
                setMake(""); setModel(""); setYear(""); setPrice(""); setImageFile(null);
                fetchCars(); // Refresh the list of cars
            })
            .catch((error) => setMessage(error.message));
    };

    const handleDelete = (e) => {
        e.preventDefault();
    
        fetch(`/api/cars/${vehicleId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) throw new Error("Failed to delete vehicle");
                // No need to parse JSON if there's no content in the response
                setMessage("Vehicle deleted successfully!");
                setVehicleId("");
                fetchCars(); // Refresh the list of cars
            })
            .catch((error) => setMessage(error.message));
    };
    

    const handleFetchCar = (e) => {
        e.preventDefault();
        if (vehicleId) {
            fetchCarDetails(vehicleId);
        } else {
            setMessage("Please enter a vehicle ID.");
        }
    };

    return (
        <div className="admin">
            <h1>Admin Panel</h1>
            {!isAuthenticated ? (
                <form onSubmit={handleLogin}>
                    <h2>Sign In</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Sign In</button>
                    {message && <div className="message">{message}</div>}
                </form>
            ) : (
                <div className="forms-container">
                    <form className="form-section" onSubmit={handleSubmit}>
                        <h2>Create Vehicle</h2>
                        <div className="form-group">
                            <label htmlFor="make">Make:</label>
                            <input
                                type="text"
                                id="make"
                                value={make}
                                onChange={(e) => setMake(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="model">Model:</label>
                            <input
                                type="text"
                                id="model"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year:</label>
                            <input
                                type="number"
                                id="year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input
                                type="number"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageFile">Image:</label>
                            <input
                                type="file"
                                id="imageFile"
                                name="imageFile"
                                onChange={(e) => setImageFile(e.target.files[0])}
                            />
                        </div>
                        <button type="submit">Create Vehicle</button>
                    </form>
                    <form className="form-section" onSubmit={handleDelete}>
                        <h2>Delete Vehicle</h2>
                        <div className="form-group">
                            <label htmlFor="vehicleId">Vehicle ID:</label>
                            <input
                                type="text"
                                id="vehicleId"
                                value={vehicleId}
                                onChange={(e) => setVehicleId(e.target.value)}
                            />
                        </div>
                        <button type="submit">Delete Vehicle</button>
                    </form>
                    <div className="car-list">
                        <h2>Available Vehicles</h2>
                        <ul>
                            {cars.map((car) => (
                                <li key={car._id}>
                                    <strong>ID:</strong> {car._id} - {car.make} {car.model}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {message && <div className="message">{message}</div>}
        </div>
    );
}

export default Admin;
