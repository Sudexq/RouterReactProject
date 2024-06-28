import React from "react";
import { Link, Outlet } from "react-router-dom";

function History() {
  return (
    <>
      <div>History</div>
      <nav>
        <Link to="company">Our Companies</Link>
        <Link to="team">Our Teams</Link>
      </nav>
      <Outlet />
      {/*bunu kullandığımızda link içine limk bağladığımız için karışıklığı engelliyor*/}
    </>
  );
}

export default History;
