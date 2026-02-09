import "./App.css";
import Aftoris from "./Pages/Aftoris/Aftoris";
import Registr from "./Pages/Registr/Registr";
import { Routes, Route } from "react-router-dom";
import Home_Date from "./Home_Date";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Aftoris />} />
      <Route path="/Registr" element={<Registr />} />
      <Route path="/Home_Date/*" element={<Home_Date />} />
    </Routes>
  );
}

export default App;
