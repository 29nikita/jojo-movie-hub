import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <MovieCard movie={movie} type="watchlist" key={movie.id} />

                <Link to={`/description/${movie.id}`} className="card-title">
                  {movie.title}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            No movies in your watchlist, add some....!
          </h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
