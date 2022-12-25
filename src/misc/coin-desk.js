
import React, { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://api.coindesk.com/v1/bpi/currentprice.json"

export default function CoinDesk() {

    const [price, setPrice] = useState(0);
    const [lastFetch, setLastFetch] = useState("");

    useEffect(() => {
        getDataWithAxios();
    }, []);// An empty array means the callback will only execute once

    const getDataWithAxios = async () => {
        const response = await axios.get(apiURL);
        console.log('coin-desk resp: ', response.data);
        setPrice(response.data.bpi.USD.rate);
        setLastFetch(response.data.time.updated);
    };

    return (
        <div>
            <h5>Coin Desk</h5>
            <a href="https://api.coindesk.com/v1/bpi/currentprice.json">Coindesk's public API</a>

            <div>
                <h6>
                    BTC Price: {price}
                </h6>
                <small>
                    {lastFetch}
                </small>
            </div>
        </div>
    )

}