import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { feltolt } from "../redux/kartyaSlice";

const Fantasztikus = () => {
  const konyvek = useSelector((state) => state.book.books);
  const osszar = useSelector((state) => state.kartya.osszar);
  const kosar = useSelector((state) => state.kartya.kosar);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <h1>Jelenlegi lakóink</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel accusantium voluptatum maiores perferendis soluta similique possimus consectetur amet doloribus veniam?</p>
        {konyvek.map((work) => {
          const kep = `kepek/${work.kep}`;
          return (
            work.fajta === "vizsla" && (
              <div key={work.kep}>
                <p>{work.nev}</p>
                <p>{work.kor}</p>
                <p>{work.fajta}</p>
                <img src={kep} alt="" />
                <button
                  onClick={() => {
                    let van = false;

                    for (let i = 0; i < kosar.length; i++) {
                      if (i % 3 == 2 && work.kep == kosar[i]) {
                        van = true;
                      }
                    }

                    if (!van) {
                      const adat = [work.szerzo, work.cim, work.kep];
                      const adatok = { adat, ar: work.ar };
                      dispatch(feltolt(adatok));
                      console.log(osszar);
                    }
                  }}
                >
                  Kosárba tesz
                </button>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Fantasztikus;
