import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const apiURL = "https://rqjmvfm8l5.execute-api.eu-central-1.amazonaws.com/Prod/api/users"

export default function Users() {

    const navigate = useNavigate();

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
        getUsersWithAxios();
    }, []);// An empty array means the callback will only execute once

    //  const getUsersWithAxios = async () => { };

    const getUsersWithFetch = async () => {
        const response = await fetch(apiURL);
        const jsonData = await response.json();
        console.log(jsonData);
        setUserData(jsonData);
    };

    const getUsersWithAxios = async () => {
        const response = await axios.get(apiURL);
        console.log(response.data);
        setUserData(response.data);
    };

    const onClear = (e) => {
        const d = e.target.value;
        console.log('d', d);
        setUserData([]);
    };

    const onDelete = async (e) => {
        const id = e.target.dataset.letter;
        const url = `${apiURL}/${id}`;
        console.log(url);
        const response = await axios.delete(url);
        console.log(response.data);
        await getUsersWithAxios(); //reload from server
    }

    const onAddUser = async (e) => {
        console.log('addUser');
        navigate("/users/add");
    }

    return (
        <div>
            <h4>Users - API</h4>
            <button className="btn btn-warning" onClick={onClear}>Clear</button>
            <button className="btn btn-primary" onClick={getUsersWithFetch}>Get (fetch)</button>
            <button className="btn btn-info" onClick={getUsersWithAxios}>Get (axios)</button>
            <button className="btn btn-primary float-end" onClick={onAddUser}>+Add</button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((user) => (
                        <tr key={user.id}>
                            <th>{user.firstName} {user.lastName}</th>
                            <th>{user.email} </th>
                            <th>
                                {/* <span className="btn btn-info" data-letter={user.id} onClick={onDetails}>Details</span>&nbsp;  */}
                                <Link to={`/users/${user.id}`}> <span className="btn btn-info">View</span></Link>
                                <Link to={`/users/edit/${user.id}`}> <span className="btn btn-primary">Edit</span></Link>
                                <span className="btn btn-danger" data-letter={user.id} onClick={onDelete}>Delete</span>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );

}