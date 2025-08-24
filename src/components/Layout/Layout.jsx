import "./layout.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileMenuOverlay from "../MobileMenuOverlay/MobileMenuOverlay";
import { AnimatePresence } from "motion/react";
export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

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
        <Navbar toggle={toggleMenu} Menu={menuOpen} />
        <AnimatePresence>
          {menuOpen && <MobileMenuOverlay onClose={closeMenu} />}
        </AnimatePresence>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
