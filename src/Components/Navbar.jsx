import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoWhite from "../assets/Logos/LogoWhite.png";

// Componente Navbar "limpo" para evitar caracteres ocultos
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={LogoWhite} alt="UIOT Logo" />
        </Link>

        {/* Ícone do Hamburger Animado (feito com divs para animação) */}
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        {/* Menu de Navegação */}
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link" onClick={closeMenu}>
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Project" className="nav-link" onClick={closeMenu}>
              Projetos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Publications" className="nav-link" onClick={closeMenu}>
              Publicações
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Team" className="nav-link" onClick={closeMenu}>
              Equipe
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
