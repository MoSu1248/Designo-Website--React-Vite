import "./layout.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { Outlet } from "react-router-dom";

export default function Layout() {
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
