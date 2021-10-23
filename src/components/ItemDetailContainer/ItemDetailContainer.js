import React, {
  useState,
  useEffect,
  useContext
} from 'react';
import { UIContext } from '../../context/UIContext';

import { useParams } from 'react-router';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemDetail } from './ItemDetail';
import './itemDetail.scss';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { loading, setLoading } = useContext(UIContext)
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirProductos()
      .then((res) => {
        setItem(
          res.find(
            (prod) => prod.id === Number(itemId)
          )
        );
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [itemId,setLoading]);

  return (
    <div>
      {loading ? (
        <h2 className="cargando">Cargando...</h2>
      ) : (
        <ItemDetail {...item} />
      )}
    </div>
  );
};
