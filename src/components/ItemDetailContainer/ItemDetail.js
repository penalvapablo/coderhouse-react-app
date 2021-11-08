import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { ProductDoesntExist } from './ProductDoesntExist';
export const ItemDetail = ({
  name,
  price,
  category,
  img,
  description,
  id,
  stock,
}) => {
  const { goBack } = useHistory();

  const { addToCart, isInCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(0);

  const handleAddToCart = () => {
    const newItem = {
      id,
      name,
      price,
      category,
      cantidad,
      stock,
    };
    if (cantidad > 0) {
      addToCart(newItem);
    }
  };

  return (
    <>
      {name === undefined ? (
        <>
          <ProductDoesntExist />
        </>
      ) : (
        <div className="item itemDetail">
          <h2 className="itemDetail__title">{name}</h2>

          <div className="itemDetail__container">
            <img
              src={img}
              alt={name}
              className="itemDetail__img"
            />
            <div className="itemDetail__container--Desktop">
              <p className="itemDetail__price">${price}</p>

              <p className="itemDetail__description">
                {description}
              </p>
              <p className="itemDetail__stock">
                Stock: {stock}
              </p>

              {isInCart(id) ? (
                <Link
                  className="button button__green"
                  to="/cart"
                >
                  Terminar mi compra
                </Link>
              ) : (
                <>
                  <ItemCount
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    max={stock}
                  />
                  <button
                    className="button button__green"
                    onClick={handleAddToCart}
                  >
                    Agregar
                  </button>
                </>
              )}

              <button
                className="button button__red volver"
                onClick={() => goBack()}
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
