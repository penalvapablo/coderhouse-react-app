import React from 'react';
import { Item } from './Item';

export const ItemList = ({ productos = [] }) => {
  return (
    <div className="products">
      <h2 className="products__title">Nuestros productos</h2>

      <div className="products__container">
        {productos.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
