import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      404 sorry <Link to="/">Back home</Link>
    </div>
  );
};

export default ErrorPage;
