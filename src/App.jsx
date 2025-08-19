import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/ContactUs";
import Locations from "./pages/Location/Locations";
import WebDesign from "./pages/Designs/WebDesign";
import GraphicDesign from "./pages/Designs/GraphicDesign";
import AppDesign from "./pages/Designs/AppDesign";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter basename="/Designo-Website--React-Vite">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index route renders at "/" */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="location" element={<Locations />} />
          <Route path="web-designs" element={<WebDesign />} />
          <Route path="graphic-designs" element={<GraphicDesign />} />
          <Route path="app-designs" element={<AppDesign />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
