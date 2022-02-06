import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Kartya = () => {
  const osszar = useSelector((state) => state.kartya.osszar);
  const kosar = useSelector((state) => state.kartya.kosar);
  console.log(kosar);

  return (
    <div>
      <Navbar />
      <p>Az összár: {osszar}</p>
      {kosar.map((item, index) => {
        const kep = `kepek/${item}`;
        return (
          <div key={index}>
            {index % 3 === 0 && <p>Szerző: {item}</p>}
            {index % 3 === 1 && <p>Cím: {item}</p>}
            {index % 3 === 2 && <img src={kep} />}
          </div>
        );
      })}
    </div>
  );
};

export default Kartya;
