import React from 'react';
import { Link } from 'react-router-dom';

export const ProductDoesntExist = () => {
  return (
    <div className="noProduct">
      <h1 className="noProduct__title">
        Este producto no existe
      </h1>
      <Link
        to="/"
        className="button button__green
      "
      >
        Volver a inicio
      </Link>
    </div>
  );
};
