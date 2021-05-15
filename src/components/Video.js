import { useState } from "react";
import ReactPlayer from "react-player/youtube";

const Video = ({ id }) => {
  const [results, setResults] = useState(null);

  const handleVideo = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results[0].key);
        } else {
          console.log("error");
        }
      })
      .catch((error) => console.error(error));

    const trailer = document.getElementById("trailer");
    //  console.log(video.style);
    trailer.style.display = "flex";

    const controls = document.getElementById("video-controls");
    controls.style.display = "none";
  };

  return (
    <div className="container">
      <div id="video">
        <ReactPlayer
          id="trailer"
          style={{ display: "none", marginBottom: "1rem" }}
          url={`https://www.youtube.com/watch?v=${results}`}
          controls="true"
          height="300px"
          width="500px"
        />
        <button id="video-controls" onClick={handleVideo}>
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

export default Video;
