import "./Union_Date.css";
import Union from "./Componets/Union/Union";
import Union_Profil from "./Componets/Union_Profil/Union_Profil";
import { Routes, Route } from "react-router-dom";

function Union_Date() {
  return (
    <Routes>
      <Route path="/Union" element={<Union />} />
      <Route path="/Union_Profil" element={<Union_Profil />} />
    </Routes>
  );
}

export default Union_Date;
