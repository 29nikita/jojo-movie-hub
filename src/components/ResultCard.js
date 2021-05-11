import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchList,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let selectedMovie = watchlist.find((o) => o.id === movie.id);
  let selectedMovieWatched = watched.find((o) => o.id === movie.id);
  const movieDisabled = selectedMovie
    ? true
    : selectedMovieWatched
    ? true
    : false;

  const watchedDisabled = selectedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`movie.title Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : `-`}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={movieDisabled}
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
