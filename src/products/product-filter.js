import React from "react";
import { useNavigate } from "react-router-dom";

const ProductFilter = ({ allProducts }) => {
  const navigate = useNavigate();

  const categories = allProducts
    ? Array.from(new Set(allProducts.map((p) => p.name))) //p.category
    : [];
    categories.unshift(null);

  const onSearchChange = (e) => {
    const category = e.target.value;
   console.log(category);
    // navigate(`searchresults/${category}`)
    navigate(`/products/1`)//hard coded id for now

  };

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for product:
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select" onChange={onSearchChange}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
