import React from 'react';
import './NavBar.scss';

export const NavBar = () => {
  return (
    <header>
      <h1 className="nav__title">TIENDA</h1>
      <nav>
        <p>Products</p>
        <p>About</p>
        <p>Contact</p>
      </nav>

      <i className="fas fa-shopping-cart"></i>
    </header>
  );
};
