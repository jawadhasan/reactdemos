import { useState, useEffect } from "react";
import axios from "axios";

//If you need to share this same fetchUser functionality with other components, you can move the useEffect code into a custom hook. 
//Creating a custom hook is relatively simple. You need a function with the word use in front of the name:
//Hooks only work in functional components. They will not work inside of a class componen.

const apiURL = "https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/users"

const useUsers = () => {

  // 1
  const [usersData, setUserData] = useState([]);

  useEffect(() => {
    getusersWithAxios();
}, []);// An empty array means the callback will only execute once


const getusersWithAxios = async () => {
    const response = await axios.get(apiURL);
    console.log(response.data);
    setUserData(response.data);
};

// 2
return [usersData];

};
export default useUsers;