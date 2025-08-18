import "./layout.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="content-wrapper">
      <Navbar />
        <main>
          <div>Hello Layout</div>
        </main>
      <Footer />
    </div>
  );
}
