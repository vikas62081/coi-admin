import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Not Found</i>
      </p>
      <Link to="/" style={{ color: "#fff" }}>
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
