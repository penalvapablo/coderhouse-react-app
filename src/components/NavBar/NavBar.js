import React from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './NavBar.scss';



export const NavBar = () => {
  const { amauntInCart, cart } = useContext(CartContext);

  const category = useLocation();




  return (
    <header>
      <Link to="/" className="brand">
        CakeHouse
      </Link>
      
      <nav className="nav__links">
        
        <Link to="/products/tortas" className={ 
          category.pathname === "/products/tortas" ? 'nav__link selected' : 'nav__link'} onChange>
          Tortas
        </Link>
        <Link
          to="/products/alfajores"
          className={category.pathname === "/products/alfajores" ? 'nav__link selected' : 'nav__link'}
        >
          Alfajores
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

      </nav>
    </header>
  );
};
