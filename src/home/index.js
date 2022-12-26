import React from "react"
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h6>Home Page</h6>
            <Link to={`/products/1`}>
                <div className="btn btn-primary">View Details (test)</div>
            </Link>
        </div>


    );
}

export default Home;