//This component will use the character endpoint of the Final Space API, 
//a free RESTful API that provides information about characters, episodes, and locations of the Final Space TV show.

import React, { useEffect, useState } from "react";
import axios from "axios";

const apiURL = "https://finalspaceapi.com/api/v0/character/?limit=12"

export default function FinalSpace() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getDataWithAxios();
    }, []);// An empty array means the callback will only execute once

    const getDataWithAxios = async () => {
        const response = await axios.get(apiURL);
        console.log(response.data);
        setData(response.data);
    };

    return (
        <div className="container">
            <h5>Final Space</h5>
            <p><a href="https://finalspaceapi.com/">FinalSpace API</a></p>
            <div className="row">

                {data.map((character) => (
                    <div key={character.id} className="col col-md-4">
                        <div className="Card" >
                            <img className="card-img-top" src={character.img_url} alt={character.name} />
                            <div className="card-body">
                                <h5 className="card-title text-primary">{character.name}</h5>
                                <h6>{character.status}</h6>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )

}