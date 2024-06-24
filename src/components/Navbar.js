import React from "react";
import { NavLink } from "react-router-dom"; //NavLink ile active class ını linklerimize eklemiş oluyoruz.

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutUs">About</NavLink>
      <NavLink to="/history">History</NavLink>
    </nav>
  );
}

export default Navbar;
