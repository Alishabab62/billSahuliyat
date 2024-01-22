import React, { useState } from 'react';
import Switch from 'react-switch';

const PowerToggle = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (isChecked) => {
        setChecked(isChecked);
    };

    return (
        <div className="example">
            <Switch
                onChange={handleChange}
                checked={checked}
                className="react-switch"
                id="normal-switch"
                offColor="#FF0101"
                onColor="#69C786"
            />
        </div>
    );
};

export default PowerToggle;
