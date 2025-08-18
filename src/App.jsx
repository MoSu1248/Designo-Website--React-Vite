import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import Services from "./pages/Services";
import { Routes, Route , BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
   <BrowserRouter basename="/Designo-Website--React-Vite">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} /> {/* index route renders at "/" */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
