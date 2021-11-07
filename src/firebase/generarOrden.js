import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from './config';

export const generarOrden = (buyerData, cart, total) => {
  return new Promise(async (resolve, reject) => {
    const orden = {
      buyer: {
        ...buyerData,
      },
      items: cart.map((el) => ({
        id: el.id,
        precio: el.price,
        cantidad: el.cantidad,
      })),
      total: total,
      date: firebase.firestore.Timestamp.fromDate(
        new Date()
      ),
    };

    const db = getFirestore();
    const orders = db.collection('orders');
    const itemsToUpdate = db.collection('productos').where(
      firebase.firestore.FieldPath.documentId(),
      'in',
      cart.map((el) => el.id)
    );

    const query = await itemsToUpdate.get();
    const batch = db.batch();

    const outOfStock = [];

    query.docs.forEach((doc) => {
      const itemInCart = cart.find(
        (prod) => prod.id === doc.id
      );
      if (doc.data().stock >= itemInCart.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.cantidad,
        });
      } else {
        outOfStock.push({ ...doc.data(), id: doc.id });
      }
    });

    if (outOfStock.length === 0) {
      orders.add(orden).then((res) => {
        batch.commit();
        resolve(res.id);
      });
    } else {
      reject(outOfStock);
    }
  });
};
