import React from "react";
import "./navbar.scss";
import Logo from "../../assets/shared/desktop/logo-dark.png";
import LogoLight from "../../assets/shared/desktop/logo-light.png";
import { NavLink } from "react-router-dom";
import Menu_Open from "../../assets/shared/mobile/icon-hamburger.svg";
import Menu_Close from "../../assets/shared/mobile/icon-close.svg";
import Nav from "./Nav";

export default function Navbar({ variant, toggle, Menu }) {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <img
          src={`${variant === "footer" ? LogoLight : Logo}`}
          alt="Designo Logo"
        />
      </NavLink>
      <Nav variant={variant} />
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <img
          src={Menu === false ? Menu_Open : Menu_Close}
          alt=""
          className="nav-toggle__icon"
        />
      </button>
    </header>
  );
}
