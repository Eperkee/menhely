import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <Link to="/fantasztikus">Fantasztikus</Link>
          <Link to="/szepirodalom">Szépirodalom</Link>
          <Link to="/szakacskonyv">Szakácskönyv</Link>
        </div>
        <div className="col-sm-4">Könyvesbolt</div>
        <div className="col-sm-4">
          <Link to="/kartya">Kosár</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
