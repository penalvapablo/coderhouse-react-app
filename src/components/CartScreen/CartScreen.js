import React from 'react';
import { Redirect } from 'react-router';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './cart.scss';
import '../Buttons/buttons.scss';

export const CartScreen = () => {
  const { cart, clearCart, removeItem, finalPrice } =
    useContext(CartContext);

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <>
          <Redirect to="/" />
        </>
      ) : (
        <>
          <h2 className="cart__title">Resumen de compra</h2>
          {cart.map((prod) => (
            <div className="prod">
              <h3 className="prod__name">{prod.name}</h3>
              <p className="prod__cantidad">
                Cantidad: {prod.cantidad}
              </p>
              <p className="prod__precio">
                Precio: ${prod.cantidad * prod.price}
              </p>

              <button
                className="button button__red"
                onClick={() => removeItem(prod.id)}
              >
                Remover del carrito
              </button>
            </div>
          ))}
          <h3 className="cart__price">
            Precio Total: ${finalPrice()}
          </h3>
          <button
            className="button button__red"
            onClick={clearCart}
          >
            Vaciar Carrito
          </button>
          <Link
            className="button button__green terminarCompra"
            to="/checkout"
          >
            Terminar mi compra
          </Link>
        </>
      )}
    </div>
  );
};
