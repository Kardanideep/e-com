import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
    <img src="/notFound.png" alt="404 Not Found" className="not-found-img" />

      <p>Oops! We couldn’t find that page.</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;