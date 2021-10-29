import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './NavBar.scss';

export const NavBar = () => {
  const { amauntInCart, cart } = useContext(CartContext);

  return (
    <header>
      <Link to="/" className="brand">
        CakeHouse
      </Link>
      <nav className="nav__links">
        <Link to="/products/tortas" className="nav__link">
          Tortas
        </Link>
        <Link
          to="/products/alfajores"
          className="nav__link"
        >
          Alfajores
        </Link>
        {/* <Link to="/about" className="nav__link">
          Sobre Nosotros
        </Link> */}
        <Link to="/contact" className="nav__link">
          Contacto
        </Link>

        <Link
          style={{
            visibility:
              cart.length === 0 ? 'hidden' : 'visible',
          }}
          className="cartContainer"
          to="/cart"
        >
          <i className="fas fa-shopping-cart nav__cart"></i>
          <span className="cartCount">
            {amauntInCart()}
          </span>
        </Link>

        {/* {cart.length === 0 ? (
          <></>
        ) : (
          <Link
            style={{ visibility: 'hidden' }}
            className="cartContainer"
            to="/cart"
          >
            <i className="fas fa-shopping-cart nav__cart"></i>
            <span className="cartCount">
              {amauntInCart()}
            </span>
          </Link>
        )} */}
      </nav>
    </header>
  );
};
