import React from "react";
import "./navbar.scss";
import Logo from "../../assets/shared/desktop/logo-dark.png";
import LogoLight from "../../assets/shared/desktop/logo-light.png";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

export default function Navbar({ variant }) {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <img
          src={`${variant === "footer" ? LogoLight : Logo}`}
          alt="Designo Logo"
        />
      </NavLink>
      <Nav variant={variant} />
    </header>
  );
}
