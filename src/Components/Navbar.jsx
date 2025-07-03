import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/Logos/LogoWhite.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={LogoWhite} alt="UIOT Logo" />
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Project" className="nav-link">
              Projetos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Publications" className="nav-link">
              Publicações
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Team" className="nav-link">
              Equipe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
