import React from "react"
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const navigate = useNavigate();
    const { slug } = useParams();

    return (
        <div className="container">
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
                Go Back
            </button>
            <h1>Products Details Page - {slug}</h1>
        </div>
    );
}

export default ProductDetails;