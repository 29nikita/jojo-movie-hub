import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Video from "./Video";

const Descriptionw = () => {
  const { id } = useParams();
  const { watched } = useContext(GlobalContext);

  // eslint-disable-next-line
  const answer = watched.filter((movie) => movie.id == id);
  console.log(answer);

  console.log(Object.values(answer[0]));
  const title = Object.values(answer[0])[5];
  const picture = Object.values(answer[0])[8];
  const date = Object.values(answer[0])[9];
  const overview = Object.values(answer[0])[6];
  const score = Object.values(answer[0])[12];
  //console.log(answer[title]);

  return (
    <div className="description">
      <div className="top-contents">
        <h1>
          {title} ({date.substring(0, 4)})
        </h1>
        <p
          style={{
            fontSize: "1.22rem",
          }}
        >
          Release Date: {date}
        </p>
      </div>
      <div class="desc-container">
        <div className="poster-img">
          {picture ? (
            <img
              src={`https://image.tmdb.org/t/p/w400${picture}`}
              alt={title}
            />
          ) : (
            <div className="filler-poster"></div>
          )}
        </div>
        <div className="contents">
          <p className="overview">{overview}</p>

          <p className="score">
            <span style={{ fontSize: "2rem" }}>⭐</span>
            <span style={{ fontSize: "1.5rem", marginLeft: "0.8rem" }}>
              {score}
            </span>
            <span style={{ fontSize: "0.8rem" }}>/10</span>
          </p>
          <Video key={id} id={id} />
        </div>
      </div>
    </div>
  );
};

export default Descriptionw;
