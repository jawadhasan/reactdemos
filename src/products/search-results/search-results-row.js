import { useNavigate } from "react-router-dom";
import "./search-results.css";

const SearchResultsRow = ({ product }) => {
  const navigate = useNavigate();

  const setActive = () => {
    // history.push(`/house/${product.id}`);
    navigate(`/product/${product.id}`)
  };

  return (
    <tr onClick={setActive}>
      <td>{product.name}</td>
      <td>{product.serialNo}</td>
      <td>{product.createdat}</td>
    </tr>
  );
};

export default SearchResultsRow;
