import 'bootstrap/dist/css/bootstrap.min.css';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap"
    ;
import {useState} from "react";

function Button2() {
    const [value, setValue] = useState([1]);

    /*
     * The second argument that will be passed to
     * `handleChange` from `ToggleButtonGroup`
     * is the SyntheticEvent object, but we are
     * not using it in this example so we will omit it.
     */
    const handleChange = (val) => setValue(val);

    return (
        <ToggleButtonGroup name={"name"} type="radio" defaultValue={1} value={value} onChange={handleChange}>
            <ToggleButton id="tbg-btn-1" value={1}>
                C°
            </ToggleButton>
            <ToggleButton id="tbg-btn-2" value={2}>
                F°
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default Button2