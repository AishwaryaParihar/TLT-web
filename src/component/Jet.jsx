import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfo from "./content/PersonalInfo";
import Guardiandetails from "./content/Guardiandetails";
import Documents from "./content/Documents";
import NotFound from "./content/NotFound";
import Sidebar from "./Sidebar";
import Educational from "./content/Educational";
import Conset from "./content/Conset";
import ThankYou from "./content/ThankYou";

const Jet = () => {
  return (

      <div className="bg-white sm:w-[79rem]  w-[100%] sm:h-[40rem]  h-[44rem] mt-[100px] sm:mt-[0px] rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
        <Sidebar />
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/Guardiandetails" element={<Guardiandetails />} />
          <Route path="/Documents" element={<Documents />} />
          <Route path="/Conset" element={<Conset />} />
          <Route path="/Educational" element={<Educational />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    
  );
};

export default Jet;
