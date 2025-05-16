// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import DataServices from "./components/DataServices";
import CatalogServices from "./components/CatalogServices";
import IntegrationServices from "./components/IntegrationServices";
import Pricing from "./components/Pricing";
import AboutUs from "./components/AboutUs";

const App: React.FC = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1" style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-services" element={<DataServices />} />
          <Route path="/catalog-services" element={<CatalogServices />} />
          <Route
            path="/integration-services"
            element={<IntegrationServices />}
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
