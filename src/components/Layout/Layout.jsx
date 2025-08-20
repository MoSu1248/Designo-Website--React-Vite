import "./layout.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  
  const currentLocation = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [currentLocation]);
  
  return (
    <div>
      <div className="content-wrapper">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
