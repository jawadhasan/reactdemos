
import React, { useState } from "react";

export default function ToogleImage() {

    const myStyle = {
        color: '#ffffff',
        backgroundColor: 'red',
      };

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h5 style={myStyle}>Event Handling & Testing</h5>

            <div>
                <button onClick={handleClick}>Toggle Image</button>
            </div>
            <br />

            <div style={{ display: isVisible ? 'block' : 'none' }}>
                <p>Look at this pretty cat</p>
                <img src='https://cataas.com/cat' alt='random cat' />
            </div>

        </div>
    )
}