import SearchBar from "../components/ui/SearchBar";
import Featured from "../components/ui/Featured";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";

function Home() {
  const apiKey = "4ea1d0b9";
  const baseURL = "https://www.omdbapi.com/";

  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  async function searchMovies(query) {
    try {
      const { data } = await axios.get(
        `${baseURL}?s=${query}&apikey=${apiKey}`
      );
      setMovies(data.Search || []); // OMDB returns { Search: [...] }
    } catch (err) {
      console.error("Error fetching movies:", err);
      <p>An error occurred while rounding up those mooviez. Please try again later.</p>;
      setMovies([]);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      searchMovies(searchInput);
    }
  }
  
  // function renderMovies() {
  //   return movies.map((movie) => (
  //     <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
  //       <Movie movie={movie} />
  //     </Link>
  //   ));
  // }

  return (
    <>
      <div className="App">
        <section id="navigation">
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSearch={handleSearch}
          />
        </section>
        <Featured />
      </div>
    </>
  );
}

export default Home;
