import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartScreen = () => {
  const { cart, clearCart, removeItem, finalPrice } =
    useContext(CartContext);
  console.log(cart);

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <>
          <h2>No hay productos agregados</h2>
          <Link to="/">Volver al inicio</Link>
        </>
      ) : (
        <>
          <h2>Resumen de compra</h2>
          <hr />
          {cart.map((prod) => (
            <div>
              <h4>{prod.name}</h4>
              <p>Cantidad: {prod.cantidad}</p>
              <p>Precio: {prod.cantidad * prod.price}</p>
              <button onClick={() => removeItem(prod.id)}>
                Remover del carrito
              </button>
            </div>
          ))}
          <hr />
          <h3>Precio Total: {finalPrice()}</h3>
          <button onClick={clearCart}>
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};
