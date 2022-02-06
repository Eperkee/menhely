import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fantasztikus from "./pages/Fantasztikus";
import Szepirodalom from "./pages/Szepirodalom";
import Szakacskonyv from "./pages/Szakacskonyv";
import Kartya from "./pages/Kartya";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { feltolt } from "./redux/bookSlice";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5000/api/book").then((response) => {
      const data = response.data;
      // console.log(data);
      dispatch(feltolt({ books: data }));
    });
  }, []);

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/fantasztikus" element={<Fantasztikus />} />
        <Route path="/szepirodalom" element={<Szepirodalom />} />
        <Route path="/szakacskonyv" element={<Szakacskonyv />} />
        <Route path="/kartya" element={<Kartya />} />
      </Routes>
    </Router>
  );
}

export default App;
