import React from 'react';
import './RoundProgressBar.css';

function RoundProgressBar({ percentage, icon }) {
    return (
        <div className="round-progress-container">
            <div
                className="round-progress"
                style={{ background: `conic-gradient(#4caf50 ${percentage}%, #ddd ${percentage}% 100%)` }}
            >
                <img src={icon} alt="plant-icon" className="plant-icon" />
            </div>
            <div className="progress-percentage">{percentage}%</div>
        </div>
    );
}

export default RoundProgressBar;
