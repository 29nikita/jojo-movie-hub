import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry!</h1>
      <h4>The page cannot be displayed</h4>
      <p>
        <Link to="/">Go to HomePage....</Link>
      </p>
    </div>
  );
};

export default NotFound;
