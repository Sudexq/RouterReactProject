import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/aboutUs">About</Link>
    </nav>
  );
}

export default Navbar;
