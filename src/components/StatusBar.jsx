import React from 'react';

const StatusBar = ({ attempts, onReset }) => {
    return (
        <div className="status-bar">
            <p>Attempts: {attempts}</p>
            <button onClick={onReset}>Reset</button>
        </div>
    );
};

export default StatusBar;
