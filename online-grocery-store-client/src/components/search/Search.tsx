import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  return (
    <form className="search ">
      <input type="text" placeholder="Search" />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
