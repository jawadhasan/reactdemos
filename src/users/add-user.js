import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const apiURL = "https://rqjmvfm8l5.execute-api.eu-central-1.amazonaws.com/Prod/api/users"

const AddUser = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        firstName: "",
        lastName: ""
    });

    const onChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
      };

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log(user);

        const res = await axios.post(`${apiURL}/add`, user);

        
        console.log(res.data);
        navigate("/users");

      };

    return (
        <div>
            Add User
            <form className="mt-2">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="firstName"
                        value={user.firstName}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        className="form-control"
                        placeholder="LastName"
                        value={user.lastName}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        value={user.email}
                        onChange={onChange}
                    />
                </div>
                
                <button
                    className="btn btn-primary mt-2"
                    disabled={!user.firstName || !user.lastName || !user.email}
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </form>

        </div>
    );
}

export default AddUser;