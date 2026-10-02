import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchInput, setSearchInput, handleSearch }) => {
  let navigate = useNavigate();

  return (
    <header id="header">
      <div className="container">
        <h1 className="header__title">Trail through our Motion Pictures</h1>
        <form className="input__wrapper" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchInput}
            placeholder="Graze by Title, Year, Genre, or even Rating"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            type="submit"
            className="search__wrapper"
            onClick={() => navigate(`/search?q=${encodeURIComponent(searchInput)}`)}
          >
            <FontAwesomeIcon icon="magnifying-glass" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
