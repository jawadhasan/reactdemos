import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const apiURL = "https://rqjmvfm8l5.execute-api.eu-central-1.amazonaws.com/Prod/api/users"

const UserDetails = () => {

    const [userData, setUserData] = useState({}); //single object

    const navigate = useNavigate();
    const { slug } = useParams();

    useEffect(() => {
        getUserWithAxios();
    }, []);

    const getUserWithAxios = async () => {
        const response = await axios.get(`${apiURL}/${slug}`);
        console.log(response.data);
        setUserData(response.data);
    };

    return (
        <div className="container">
            <h5>User Details {slug}</h5>        
            <div className="row">
                <div className="col col-md-6">
                    <div className="Card" >
                        <img className="card-img-top" src={userData.img_url} alt={userData.name} />
                        <div className="card-body">
                            <h5 className="card-title text-primary">{userData.firstName} {userData.lastName}</h5>
                            <h6>{userData.email}</h6>
                            <h6>{userData.registeredAt}</h6>
                        </div>
                        <div className="card-footer">
                        <button className="btn btn-primary" onClick={() => navigate(-1)}>Go Back </button>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default UserDetails;