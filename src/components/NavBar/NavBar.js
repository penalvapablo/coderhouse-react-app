import React from 'react';
import './NavBar.scss';

export const NavBar = () => {
  return (
    <header>
      <h1 className="nav__title">TIENDA</h1>
      <nav className="nav__links">
        <p className="nav__link">Products</p>
        <p className="nav__link">About</p>
        <p className="nav__link">Contact</p>
      </nav>

      <i className="fas fa-shopping-cart nav__cart"></i>
    </header>
  );
};
