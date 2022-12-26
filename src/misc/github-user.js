import React, { useState, useEffect } from "react";

const gitHubUrl = "https://api.github.com/users/jawadhasan"

export default function GitHubUser() {

    //State Hook below will allow the use of state in the  function component without writing a separate class component. 
    //Effect Hook, which will allow you to perform side effect operations such as fetching data, clean up, or DOM manipulation.
    const [userData, setUserData] = useState({});

    //useEffect() takes as argument a function that will execute after the first render and after every component update. 
    //So this function is an apt place to call the getGitHubUserWithFetch() function, 
    //whose job is to get the user data from GitHub API and update the component. 
    //Passing a second argument to useEffect is optional. Passing an empty array [] ensures this effect will run just once; 
    //otherwise, it will run after every render.

    useEffect(() => {
        getGitHubUserWithFetch();
    }, []);

    // const getGitHubUserWithFetch = async () => { };

    const getGitHubUserWithFetch = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        console.log(jsonData);
        setUserData(jsonData);
      };

      const getGiHubUserWithAxios = async () => {
        const response = await axios.get(gitHubUrl);
        setUserData(response.data);
      };


    return (
        <div className="user-container">
            <p className="info-item"><span className="fa fa-user"> </span>{userData.login}</p>
            <p className="info-item"><span className="fa fa-building"></span> {userData.location}</p>
            <p className="info-item"><span className="fa fa-blog"></span> {userData.blog}</p>
            <p className="info-item"><span className="fa fa-building"></span> Company: {userData.company}</p>
        </div>
    )

}