import React from 'react';
import "./nav.scss";
import Logo from "../../assets/shared/desktop/logo-dark.png"
import LogoLight from "../../assets/shared/desktop/logo-light.png"
import { Link, NavLink } from "react-router-dom";

export default function Navbar({variant}) {
  return (
    <header className='header'>
      <NavLink to="/"  className="logo">
        <img src={`${variant === "footer" ? LogoLight : Logo}`} alt="Designo Logo" />
      </NavLink>
      <nav className={`${variant === "footer" ? "navbar--footer" : "nav "}`}>
        <ul className='nav__list'>
          <li className='nav__item'><NavLink to="/about" className='nav__link' >Our Company</NavLink></li>
          <li className='nav__item'><NavLink to="/location" className='nav__link' >Locations</NavLink></li>
          <li className='nav__item'><NavLink to="/contact"className='nav__link' >Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

