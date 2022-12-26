import React from "react"
import "./product.css";
import { useState } from "react";
import emailIcon from "./Email.png";
import Inquiry from "./Inquiry";

const Product = ({ product }) => {
  const [inquiryShown, setInquiryShown] = useState(false);
  const inquiryClick = () => {
    setInquiryShown(!inquiryShown);
  };
  return (
    <div>
      <div className="row mt-2">
        <h5 className="col-md-12">{product.name}</h5>
      </div>
      <div className="row">
        <h3 className="col-md-12">{product.serialNo}</h3>
      </div>
      <div className="row">
        <div className="col-md-7">
          {/* <img src={`/images/${product.photo}.jpeg`} alt="Product" /> */}
          <img src={`https://picsum.photos/500.jpg`} alt="Product" />
          
          <p>
          <small>images are randomly selected from <a href="#">https://picsum.photos/</a></small>
          </p>
          
        </div>
        <div className="col-md-5">
          <p className="price">${product.createdat}</p>
       
          <img
            src={emailIcon}
            height="50"
            alt="inquiry"
            onClick={inquiryClick}
          />
          {inquiryShown && <Inquiry product={product} />}
        </div>
      </div>
    </div>
  );
};

export default Product;
