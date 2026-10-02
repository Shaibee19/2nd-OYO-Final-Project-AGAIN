import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieSearches from "./pages/MovieSearches";
import MovieInfo from "./pages/MovieInfo";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" exact element={<MovieSearches />} />
          <Route path="/movie/:imdbID" element={<MovieInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
