import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 csont">
            <h1>Legyél önkéntes</h1>
          </div>
          <div className="col-sm-8">
            <img src="kepek/kutya.jpg" alt="" style={{width: "100%"}} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
