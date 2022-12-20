import React, { useState } from 'react'; // ! TOOGLE BUTTON

function Box({ label, toggled, onClick }) {
    const [color1, setColor1] = useState(true);
    function changColor() {
        return setColor1(!color1);
    }
    return (

        <div>
            <button onClick={changColor}>change color</button>
            <div style={{ backgroundColor: color1 ? "red" : "green", width: 300, height: 300 }}>Toggle Button</div>
        </div>
    )
}

export default Box