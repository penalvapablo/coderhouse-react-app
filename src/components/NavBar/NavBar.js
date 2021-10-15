import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = () => {
  return (
    <header>
      <Link to="/" className="brand">
        CakeHouse
      </Link>
      <nav className="nav__links">
        <Link
          to="/products/tortas"
          className="nav__link"
        >
          Tortas
        </Link>
        <Link
          to="/products/alfajores"
          className="nav__link"
        >
          Alfajores
        </Link>
        <Link to="/about" className="nav__link">
          Sobre Nosotros
        </Link>
        <Link to="/contact" className="nav__link">
          Contacto
        </Link>
        <Link to="/cart">
          <i className="fas fa-shopping-cart nav__cart"></i>
        </Link>
      </nav>
    </header>
  );
};
