import React, { useState, useEffect } from "react";
import axios from "axios";


const apiURL = "https://rqjmvfm8l5.execute-api.eu-central-1.amazonaws.com/Prod/api/users"

export default function Users() {

    //Use the useState hook to create variables that will hold the list of users and update the same list of users (with usersSet).
    //the useState hook is similar to the this.setState() call in class components,
    const [usersData, setUserData] = useState([]);
    const [counter, updateCounter] = React.useState(0);

    //The useEffect hook should be used when some variable or property changes, and you need to update your component to reflect that change.
    // A change could be an asynchronous request to an API or any other side effect. 
    //useEffect takes two arguments: a callback function and an array of dependencies. 
    //The array of dependencies will consist of variables that will be watched by the useEffect hook. 
    //When any of the dependencies change the code in the callback, the function will execute. 
    //If the dependency array is empty, the callback function will only execute once as the component mounts.

    useEffect(() => {
        getusersWithAxios();
    }, []);// An empty array means the callback will only execute once

    //  const getusersWithAxios = async () => { };

    const getusersWithAxios = async () => {
        const response = await axios.get(apiURL);
        console.log(response.data);
        setUserData(response.data);
    };

    return (
        <div>
            {usersData.map((user) => (
                <li key={user.id}>
                   {user.firstName} {user.lastName} {user.email}     
                </li>
            ))}
        </div>
    );

}