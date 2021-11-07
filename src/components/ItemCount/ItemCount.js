import React from 'react';
import './ItemCount.scss';

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
    <div className="itemCount">
      <button
        className="itemCount__handle"
        onClick={handleSubtract}
      >
        -
      </button>
      <span className="itemCount__number">{cantidad}</span>
      <button
        className="itemCount__handle"
        onClick={handleAdd}
      >
        +
      </button>
    </div>
  );
};
