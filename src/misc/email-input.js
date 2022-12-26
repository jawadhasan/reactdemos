import React, { useState } from "react";

export default function EmailInput() {

    const [emailAddress, setEmail] = useState("");
    const [hasValidEmail, setHasValidEmail] = useState(false);

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleClick = () => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setHasValidEmail(regex.test(emailAddress));
    };

    return (
        <div>
            <h5>Email Input</h5>

            <div>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    onChange={handleChange}
                    value={emailAddress}
                />
                <button onClick={handleClick}>Check if email is valid</button>
            </div>
            {hasValidEmail && emailAddress ? (
                <p>Email Address is valid</p>
            ) : (
                <p>Email Address is NOT valid</p>
            )}

        </div>
    )
}