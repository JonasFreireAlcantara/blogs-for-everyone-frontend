import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import ReactLogo from "../../assets/react-logo.png";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <img className="blog-logo" alt="Espaço da Tecnologia" src={ReactLogo} />

        <div className="blog-title">
          <strong className="title">Espaço da Tecnologia</strong>
          <strong className="subtitle">10110001 11010110</strong>

          <nav>
            <Link className="header-navigation-button" to="/">
              Home
            </Link>
            <Link className="header-navigation-button" to="/about">
              Sobre
            </Link>
            <Link className="header-navigation-button" to="/categories">
              Categorias
            </Link>
          </nav>
        </div>
      </div>

      <hr className="header-horizontal-line" />
    </header>
  );
}
