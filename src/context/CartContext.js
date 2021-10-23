import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter(
      (prod) => prod.id !== itemId
    );
    setCart(newCart);
  };

  const amauntInCart = () => {
    return cart.reduce(
      (acc, prod) => acc + prod.cantidad,
      0
    );
  };

  const finalPrice = () => {
    return cart.reduce(
      (acc, prod) => acc + (prod.cantidad * prod.price),
      0
    );
  };

  const isInCart = (itemId) => {
    return cart.some( (prod) => prod.id === itemId)
  }
  
  const clearCart = () => {
    setCart([]);
  };

  return <CartContext.Provider value={ {
    cart,
    addToCart,
    removeItem,
    amauntInCart,
    clearCart,
    isInCart,
    finalPrice
  }}>
    {children}  

  </CartContext.Provider>;
};
