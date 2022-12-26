import React, { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://rqjmvfm8l5.execute-api.eu-central-1.amazonaws.com/Prod/api/users"
export default function UserCrud() {

    const [users, setUsers] = useState([]);

    //useEffect accepts two parameters, 1st is the function, and 2nd when the function has to execute, which is an array
    // of values, so when any array value changes. An empty array means only run first time.
    useEffect(() => {
        getDataWithAxios();
    }, []);// An empty array means the callback will only execute once

    const getDataWithAxios = async () => {
        const response = await axios.get(apiURL);
        console.log(response.data);
        setUsers(response.data);
    };

    //fetch example
    const fetchHouse = async()=>{
        const rsp = await fetch("houses.json");
        const house = await rsp.json();
    }

    return (

        <div>
            <h5>User CRUD Demo</h5>
           
            <h6>new item</h6>

            {users.map((user) => (
                <div key={user.id}>
                   {user.firstName} {user.lastName} {user.email}     
                </div>
            ))}       

        </div>
    )
}