import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 mancs">
        <img src="kepek/pawprint.png" alt="mancs" />
        <p>Fürge lábak <br />állatmenhely</p>
        </div>
        <div className="col-sm-8 cimek">
          <Link to="/fantasztikus">Fantasztikus</Link>
          <Link to="/szepirodalom">Szépirodalom</Link>
          <Link to="/szakacskonyv">Szakácskönyv</Link>
          <Link to="/elerhetoseg">Elérhetőség</Link>
        </div>
    </div>
    </div>
  );
};

export default Navbar;
