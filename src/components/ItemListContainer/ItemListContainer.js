import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from './ItemList';
import './itemListContainer.scss';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    pedirProductos()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section>
      {loading ? <h2>Cargando...</h2> : <ItemList productos={items} />}
    </section>
  );
};
