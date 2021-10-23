import React from 'react';

export const ItemCount = ({
  cantidad,
  setCantidad,
  max,
}) => {
  const handleSubtract = () => {
    if (cantidad > 0) setCantidad(cantidad - 1);
  };
  const handleAdd = () => {
    if (cantidad < max) setCantidad(cantidad + 1);
  };

  return (
    <div>
      <button onClick={handleSubtract}>-</button>
      <span>{cantidad}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};
