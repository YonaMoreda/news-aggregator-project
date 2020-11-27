import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/navigation.css";
const Navigation = () => {
  return (
    <>
      <section id="nav">
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
      </section>
    </>
  );
};
export default Navigation;
