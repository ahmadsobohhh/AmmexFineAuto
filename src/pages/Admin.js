import React, { useState } from "react";
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

    const ADMIN_USERNAME = "admin"; // Replace with your admin username
    const ADMIN_PASSWORD = "password"; // Replace with your admin password

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
                return response.json();
            })
            .then(() => {
                setMessage("Vehicle deleted successfully!");
                setVehicleId("");
            })
            .catch((error) => setMessage(error.message));
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
                                id="image"
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
                </div>
            )}
            {message && <div className="message">{message}</div>}
        </div>
    );
}

export default Admin;
