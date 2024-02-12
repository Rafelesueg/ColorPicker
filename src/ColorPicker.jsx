import React, {useState} from 'react';

function ColorPicker(){

    const[color, setColor] = useState("#FFFFFF");

    function changeColor(event){
        setColor(event.target.value)
    }

    return(<div className="color-picker-container">
        <h1>COLOR PICKER</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected color: {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={changeColor}></input>
        </div>)
}

export default ColorPicker