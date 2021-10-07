import React from 'react';

export const Item = ({ name, price, img }) => {
  return (
    <div className="item">
      <h2 className="item__title">{name}</h2>
      <p className="item__price">{price}</p>
      <img src={img} alt="#" />
    </div>
  );
};
