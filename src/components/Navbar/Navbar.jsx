import React from 'react';
import "./nav.scss";
import Logo from "../../assets/shared/desktop/logo-dark.png"
import LogoLight from "../../assets/shared/desktop/logo-light.png"

export default function Navbar({variant}) {
  return (
    <header className='header'>
      <a href="/" className="logo">
        <img src={`${variant === "footer" ? LogoLight : Logo}`} alt="Designo Logo" />
      </a>
      <nav className={`${variant === "footer" ? "navbar--footer" : "nav "}`}>
        <ul className='nav__list'>
          <li className='nav__item'><a className='nav__link' href="#about">Our Company</a></li>
          <li className='nav__item'><a className='nav__link' href="#location">Locations</a></li>
          <li className='nav__item'><a className='nav__link' href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

