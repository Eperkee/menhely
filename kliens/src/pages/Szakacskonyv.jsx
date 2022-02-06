import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { feltolt } from "../redux/kartyaSlice";

const Szakacskonyv = () => {
  const konyvek = useSelector((state) => state.book.books);
  const osszar = useSelector((state) => state.kartya.osszar);
  const kosar = useSelector((state) => state.kartya.kosar);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div className="container">
        {konyvek.map((work) => {
          const kep = `kepek/${work.kep}`;
          return (
            work.kategoria === "szakacs" && (
              <div key={work.kep}>
                <p>{work.szerzo}</p>
                <p>{work.cim}</p>
                <p>{work.ar}</p>
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

export default Szakacskonyv;
