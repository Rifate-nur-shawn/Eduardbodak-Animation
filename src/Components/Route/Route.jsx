import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Hero from "../Hero/Hero";
import Prozess from "../../Pages/Prozess";
import Peris from "../../Pages/Peris";
import Kontakt from "../../Pages/Kontakt";

function AppRoutes() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/service" element={<Hero />} />
          <Route path="/prozess" element={<Prozess />} />
          <Route path="/preis" element={<Peris />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
