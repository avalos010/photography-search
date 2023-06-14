import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation-bar">
      <h2>Photography</h2>
      <ul className="navigation-links">
        <li>
          <Link to="/popular">Popular</Link>
        </li>
        <li>
          {" "}
          <Link to="/latest">Latest</Link>
        </li>
        <li>
          {" "}
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
