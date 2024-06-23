import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/aboutUs">About</Link>
    </nav>
  );
}

export default Navbar;
