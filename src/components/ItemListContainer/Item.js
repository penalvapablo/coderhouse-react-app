import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({
  name,
  price,
  img,
  category,
  id,
}) => {
  return (
    <div className="item">
      <h2 className="item__title">{name}</h2>
      <p className="item__price">${price}</p>
      <img src={img} alt={name} className="item__img" />
      <Link to={`/detail/${id}`} className="item__btn">
        Comprar
      </Link>
    </div>
  );
};
