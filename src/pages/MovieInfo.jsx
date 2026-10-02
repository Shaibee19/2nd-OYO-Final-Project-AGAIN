import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieInfo() {
  // DISPLAYING MOVIES
  const apiKey = "4ea1d0b9";
  const baseURL = "https://www.omdbapi.com/";
  const { imdbID } = useParams();
  const [detailedMovie, setDetailedMovie] = useState(null); // Changed from [] to null
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  // BY IMDB
  async function fetchMovieByIMDB({ imdbID }) {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${baseURL}?i=${imdbID}&apikey=${apiKey}`
      );

      // Check if the API returned an error
      if (data.Response === "False") {
        setError(data.Error);
      } else {
        setDetailedMovie(data);
      }
    } catch (err) {
      setError("Failed to fetch movie data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (imdbID) {
      fetchMovieByIMDB({ imdbID });
    }
  }, [imdbID]); // Add imdbID as dependency

  return (
    <div className="detailedMovie">
    <div className="detailedMovie-card">
        {loading ? (
          <p className="loading">🍿 Loading movie...</p>
        ) : error ? (
          <p className="error">Error: {error}</p>
        ) : detailedMovie ? (
          <div className="detailedMovie-card__container">
            {detailedMovie.Poster && (
              <img
                src={detailedMovie.Poster}
                alt={detailedMovie.Title}
                style={{ maxWidth: "300px" }}
              />
            )}
            <div className="detailedMovie-card__info">
              <h2>{detailedMovie.Title}</h2>
              <p><strong>Year:</strong> {detailedMovie.Year}</p>
              <p><strong>Released:</strong> {detailedMovie.Released}</p>
              <p><strong>Runtime:</strong> {detailedMovie.Runtime}</p>
              <p><strong>IMDB Rating:</strong> {detailedMovie.imdbRating}/10</p>
              <p><strong>Rated:</strong> {detailedMovie.Rated}</p>
              <p><strong>Genre:</strong> {detailedMovie.Genre}</p>
              <p><strong>Runtime:</strong> {detailedMovie.Runtime}</p>
              <p><strong>Director:</strong> {detailedMovie.Director}</p>
              <p><strong>Awards:</strong> {detailedMovie.Awards}</p>
              <p><strong>Box Office:</strong> {detailedMovie.BoxOffice}</p>
              <p><strong>Plot:</strong> {detailedMovie.Plot}</p>
              <p><strong>Actors:</strong> {detailedMovie.Actors}</p>
              <p><strong>Writer:</strong> {detailedMovie.Writer}</p>
              <p><strong>Director:</strong> {detailedMovie.Director}</p>
              <div className="detailedMovie-card__ratings">
                <strong><FontAwesomeIcon icon="star" />Ratings:</strong>
                {detailedMovie.Ratings &&
                  detailedMovie.Ratings.map((rating, index) => (
                    <div key={index}>
                      {rating.Source}: {rating.Value}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : null}
    </div>
    </div>
  );
}

export default MovieInfo;
