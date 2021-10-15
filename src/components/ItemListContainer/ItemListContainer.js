import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from './ItemList';
import './itemListContainer.scss';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirProductos()
      .then((res) => {
        if (categoryId) {
          setItems(res.filter((prod) => prod.category === categoryId));
        } else {
          setItems(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <section>
      {loading ? <h2>Cargando...</h2> : <ItemList productos={items} />}
    </section>
  );
};
