import React from "react"
import Product from "./product";

const FeaturedProduct = ({ product }) => {
  if (product)
    return (
      <div>
        <div className="row featuredProduct">
          <h3 className="col-md-12 text-center">Featured Product</h3>
        </div>
        <Product product={product} />
      </div>
    );
  return <div>No featured product at this time</div>;
};

export default FeaturedProduct;