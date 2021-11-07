import React, {
  useEffect,
  useState,
  useContext,
} from 'react';
import { useParams } from 'react-router';
import { UIContext } from '../../context/UIContext';
import { getFirestore } from '../../firebase/config';
import { LoaderView } from '../Loader/Loader';
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
        <LoaderView />
      ) : (
        <ItemList productos={items} />
      )}
    </section>
  );
};
