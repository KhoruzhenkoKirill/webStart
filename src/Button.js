import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";

function Button() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: '°C', value: '1' },
        { name: '°F', value: '2' },
    ];

    return (
            <ToggleButtonGroup name='name'>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant="outline-light"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
    );
}
export default Button