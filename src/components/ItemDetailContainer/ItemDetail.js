import React from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';

export const ItemDetail = ({
  name,
  price,
  category,
  img,
  description,
}) => {
  const { goBack } = useHistory();

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
        <Link to="/cart" className="item__btn">
          Quiero
        </Link>
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
