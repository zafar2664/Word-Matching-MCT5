import React, { useState } from 'react';
import ConfigPanel from './components/ConfigPanel';
import GameBoard from './components/GameBoard';
import StatusBar from './components/StatusBar';
import './index.css';

function App() {
    const [config, setConfig] = useState({
        groupSize: 2,
        itemCount: 8,
        columns: 4,
    });

    const [attempts, setAttempts] = useState(0);

    const [resetTrigger, setResetTrigger] = useState(false);

    const handleConfigChange = (newConfig) => {
        setConfig(newConfig);
        setAttempts(0); // Reset attempts on config change
        setResetTrigger(!resetTrigger); // Trigger game reset
    };

    return (
        <div className="app">
            <h1>Word Connect</h1>
            <h2>Connect group of 2 words by clicking on related words</h2>
            <ConfigPanel config={config} onConfigChange={handleConfigChange} />
            <StatusBar attempts={attempts} onReset={() => setResetTrigger(!resetTrigger)} />
            <GameBoard
                config={config}
                attempts={attempts}
                setAttempts={setAttempts}
                resetTrigger={resetTrigger}
            />
        </div>
    );
}

export default App;
