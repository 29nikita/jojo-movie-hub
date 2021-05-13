/* @flow */
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";

const Watched = ({ movie }) => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <MovieCard movie={movie} type="watched" key={movie.id} />

                <Link to={`/descriptionw/${movie.id}`} className="card-title">
                  {movie.title}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list, add some....!</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
