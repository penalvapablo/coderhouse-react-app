import React, {
  useEffect,
  useState,
  useContext,
} from 'react';
import { useParams } from 'react-router';
import { UIContext } from '../../context/UIContext';
import { getFirestore } from '../../firebase/config';
import { ItemList } from './ItemList';
import './itemListContainer.scss';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { loading, setLoading } = useContext(UIContext);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const productos = categoryId
      ? db
          .collection('productos')
          .where('category', '==', categoryId)
      : db.collection('productos');

    productos
      .get()
      .then((res) => {
        const newItems = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setItems(newItems);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [categoryId, setLoading]);

  return (
    <section>
      {loading ? (
        <h2 className="cargando">Cargando...</h2>
      ) : (
        <ItemList productos={items} />
      )}
    </section>
  );
};
// setLoading(true);

// pedirProductos()
//   .then((res) => {
//     if (categoryId) {
//       setItems(res.filter((prod) => prod.category === categoryId));
//     } else {
//       setItems(res);
//     }
//   })
//   .catch((err) => console.log(err))
//   .finally(() => {
//     setLoading(false);
//   });
