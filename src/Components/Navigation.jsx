import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <ul>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/news">
          <li>news</li>
        </Link>
        <Link to="/contact">
          <li>contact</li>
        </Link>
      </ul>
    </>
  );
};
export default Navigation;
