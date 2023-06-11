import React, { useState, useEffect, useMemo } from "react"
import Header from "./header";
import FeaturedProduct from "./featured-product";
import ProductFilter from "./product-filter"
import SearchResults from "./search-results";

import "./products-app.css";
//sfc tab: stateless function

const apiURL = "https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/products"

const Products = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const rsp = await fetch(apiURL);//"/products.json" if from json file
            const products = await rsp.json();
            console.log('products', products);
            setAllProducts(products);
        };
        fetchProducts();
    }, []);

    const featuredProduct = useMemo(() => {
        if (allProducts.length) {
            const randomIndex = Math.floor(Math.random() * allProducts.length);
            return allProducts[randomIndex];
        }
    }, [allProducts]);

    return (

        <div className="container">
            <Header subtitle="Products Catalog" />
            <ProductFilter allProducts={allProducts} />
            <FeaturedProduct product={featuredProduct} />
        </div>
    );
}

export default Products;