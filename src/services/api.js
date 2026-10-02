// eventually want this to be where the API gets pulled and then can sent out to use without having to retype it


// import axios from "axios";

// const apiKey = "4ea1d0b9";
//   const baseURL = "https://www.omdbapi.com/";

// SEARCH MOOVIES BY TITLE
// const [movies, setMovies] = useState([]);

// export async function searchMovies(query) {
//     try {
//       const { data } = await axios.get(
//         `${baseURL}?s=${query}&apikey=${apiKey}`
//       );
//       setMovies(data.Search || []); // OMDB returns { Search: [...] }
//     } catch (err) {
//       console.error("Error fetching movies:", err);
//       // <p>
//       //   An error occurred while rounding up those mooviez. Please try again
//       //   later.
//       // </p>;
//       setMovies([]);
//     }
//   }

// GET DETAILED MOVIE INFO BY IMDBID
// const { imdbID } = useParams();

// export async function fetchMovieByIMDB({ imdbID }) {
//   try {
//     const { data } = await axios.get(
//       `${baseURL}?i=${imdbID}&apikey=${apiKey}`
//     );
//     return setDetailedMovie(data) || null;
//   } catch (err) {
//     console.error("An error occurred while rounding up those mooviez. Please try again later.", err);
//     return null;
//   }
// }
