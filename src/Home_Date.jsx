import "./Home_Date.css";
import { Routes, Route } from "react-router-dom";
import Heder from "./Componets/Heder/Heder";
import Profil_Date from "./Profil_Date";
import Union from "./Componets/Union/Union";
import Union_Profil from "./Componets/Union_Profil/Union_Profil";
import Add_outLine from "./Componets/Add_online/Add_online";
import Document_text from "./Componets/Document_text/Document_text";
import Search_online from "./Componets/Search_online/Search_online";
import Notifications from "./Componets/Notifications/Notifications";

function Home_Date() {
  return (
    <div className="Home_Date">
      <Heder />
      <Routes>
        <Route path="Profil_Date" element={<Profil_Date />} />
        <Route path="Union" element={<Union />} />
        <Route path="Union_Profil" element={<Union_Profil />} />
        <Route path="Add_online" element={<Add_outLine />} />
        <Route path="Document_text" element={<Document_text />} />
        <Route path="Sesrch_online" element={<Search_online />} />
        <Route path="Notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}

export default Home_Date;
