import React, { useState, useEffect } from 'react';
import RoundProgressBar from './RoundProgressBar';
import './PlantProgress.css';
import { ProgressBar, Button } from "react-bootstrap";

import tomatoIcon from '../assets/icons/tomato.png';
import lettuceIcon from '../assets/icons/lettuce.png';
import romaineIcon from '../assets/icons/maror.png'; // Replace with the Romaine icon if available
import cherryTomatoIcon from '../assets/icons/parsley.png'; // Replace with the Cherry Tomato icon if available

const allPlants = [
    { name: 'Tomato', icon: lettuceIcon },
    { name: 'Lettuce', icon: lettuceIcon },
    { name: 'Romaine', icon: lettuceIcon },
    { name: 'Cherry Tomato', icon: lettuceIcon },
];

function PlantProgress() {
    const [startDates, setStartDates] = useState({});
    const [plants, setPlants] = useState(allPlants);
    const [harvestComplete, setHarvestComplete] = useState({});

    useEffect(() => {
        const savedStartDates = JSON.parse(localStorage.getItem("startDates"));
        if (savedStartDates) {
            const convertedDates = Object.keys(savedStartDates).reduce((acc, key) => {
                acc[key] = new Date(savedStartDates[key]);
                return acc;
            }, {});
            setStartDates(convertedDates);
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("plants", JSON.stringify(plants));
    }, [plants]);

    const handleDateChange = (plantName, date) => {
        setStartDates((prevState) => {
            const newState = {
                ...prevState,
                [plantName]: new Date(date),
            };
            localStorage.setItem("startDates", JSON.stringify(newState));
            return newState;
        });
    };


    const handleHarvestClick = (plantName) => {
        setHarvestComplete((prevState) => ({
            ...prevState,
            [plantName]: true,
        }));
    };

    const handleNewPlantSelection = (plantName, newPlantName) => {
        const newPlant = allPlants.find((plant) => plant.name === newPlantName);
        setPlants((prevState) => prevState.map((plant) => (plant.name === plantName ? newPlant : plant)));
        setHarvestComplete((prevState) => ({
            ...prevState,
            [plantName]: false,
        }));
    };

    const calculateProgress = (startDate) => {
        if (!startDate) return 0;
        const currentDate = new Date();
        const elapsedTime = currentDate - startDate;
        const totalDuration = 3 * 7 * 24 * 60 * 60 * 1000; // 3 weeks in milliseconds
        const progress = Math.min(Math.round((elapsedTime / totalDuration) * 100), 100);
        return progress;
    };

    return (
        <div className="plant-progress-container">
            {plants.map((plant) => (
                <div key={plant.name} className="plant-progress-item">
                    <RoundProgressBar
                        percentage={calculateProgress(startDates[plant.name])}
                        icon={plant.icon}
                    />
                    <p>{plant.name}</p>
                    <input
                        type="date"
                        value={startDates[plant.name] ? startDates[plant.name].toISOString().split('T')[0] : ''}
                        onChange={(e) => handleDateChange(plant.name, e.target.value)}
                    />
                    {calculateProgress(startDates[plant.name]) === 100 && !harvestComplete[plant.name] && (
                        <button onClick={() => handleHarvestClick(plant.name)}>Ready for Harvest</button>
                    )}
                    {harvestComplete[plant.name] && (
                        <>
                            <p>Harvest Complete</p>
                            <select onChange={(e) => handleNewPlantSelection(plant.name, e.target.value)}>
                                <option>Select a new plant</option>
                                {allPlants.map((p) => (
                                    <option key={p.name} value={p.name}>
                                        {p.name}
                                    </option>
                                ))}
                            </select>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PlantProgress;
