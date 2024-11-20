import React, { useState } from 'react';

const ConfigPanel = ({ config, onConfigChange }) => {
    const [localConfig, setLocalConfig] = useState(config);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocalConfig({ ...localConfig, [name]: parseInt(value) });
    };

    const applySettings = () => {
        onConfigChange(localConfig);
    };

    return (
        <div className="config-panel">
            <h2>Config Settings</h2>
            <div>
                <label>Group Size:</label>
                <input
                    type="number"
                    name="groupSize"
                    value={localConfig.groupSize}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Item Count:</label>
                <input
                    type="number"
                    name="itemCount"
                    value={localConfig.itemCount}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Columns:</label>
                <input
                    type="number"
                    name="columns"
                    value={localConfig.columns}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={applySettings}>Apply</button>
        </div>
    );
};

export default ConfigPanel;
