import { stock } from '../data/stock';

export const pedirProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stock);
    }, 1000);
  });
};
