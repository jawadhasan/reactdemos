import React from "react"
import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";

const SearchResults = ({ allProducts }) => {
  const { category } = useParams();
  const filteredProducts = allProducts.filter((p) => p.name === category || "");//category

  console.log('searchResult',filteredProducts);

  return (
    <div className="mt-2">
      <h4>Results for {category}:</h4>
      <table className="table table-hover">
        <tbody>
          {filteredProducts.map((p) => (
            <SearchResultsRow key={p.id} product={p} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
