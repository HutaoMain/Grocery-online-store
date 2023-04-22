import { FaSearch } from "react-icons/fa";
import "./Search.css";

interface SearchProps {
  handleSearch: (searchTerm: string) => void;
}

const Search = ({ handleSearch }: SearchProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <section className="search ">
        <input type="text" placeholder="Search" onChange={handleInputChange} />
        <button type="submit">
          <FaSearch />
        </button>
      </section>
    </div>
  );
};

export default Search;
