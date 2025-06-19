import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Prozess from "../../Pages/Prozess";
import Peris from "../../Pages/Peris";
import Kontakt from "../../Pages/Kontakt";
import Service from "../../Pages/Service";
import Footer from "../Footer/Footer";

function AppRoutes() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/service" element={<Service />} />
          <Route path="/prozess" element={<Prozess />} />
          <Route path="/preis" element={<Peris />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default AppRoutes;
