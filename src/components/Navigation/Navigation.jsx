import "./Navigation.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen)

  return (
    <section id="top" className="navigation-section">
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`ul-navigation ${isMenuOpen ? "open" : ""}`}>
        <li className="li-navigation">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li className="li-navigation">
          <NavLink to="/Questions" className={({ isActive }) => (isActive ? "active" : "")}>
            Questions
          </NavLink>
        </li>
      </ul>
    </section>
  )
}