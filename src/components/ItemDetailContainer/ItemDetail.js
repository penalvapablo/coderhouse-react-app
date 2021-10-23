import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';

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
    };
    if (cantidad > 0) {
      addToCart(newItem);
    }
  };

  return (
    <div className="item itemDetail">
      <img
        src={img}
        alt={name}
        className="itemDetail__img"
      />

      <div className="itemDetail__container">
        <h2 className="item__title">{name}</h2>
        <p className="item__price">{price}</p>
        <p className="">{category}</p>
        <p className="itemDetail__description">
          {description}
        </p>
        <p>Stock: {stock}</p>
        <Link to="/cart" className="item__btn">
          Quiero
        </Link>

        {isInCart(id) ? (
          <Link to="/cart">Terminar mi compra</Link>
        ) : (
          <>
            <ItemCount
              cantidad={cantidad}
              setCantidad={setCantidad}
              max={stock}
            />
            <button
              className="item__btn"
              onClick={handleAddToCart}
            >
              Agregar
            </button>
          </>
        )}

        <button
          className="item__btn"
          onClick={() => goBack()}
        >
          Volver
        </button>
      </div>
    </div>
  );
};
