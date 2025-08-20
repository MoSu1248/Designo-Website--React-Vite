import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
export default function Nav({ variant }) {
  return (
    <nav className={`${variant === "footer" ? "navbar--footer" : "nav "}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            Our Company
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/location"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            Locations
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
