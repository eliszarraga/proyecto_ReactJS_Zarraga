import { createContext, useState } from "react";

export const newContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const shoppingCart = (prod) => {
    setCart([...cart, prod]);
  };

  const deleteCart = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const cantidadCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const totalCart = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const vaciarCart = () => {
    setCart([]);
  };

  return (
    <newContext.Provider
      value={{
        cart,
        totalCart,
        vaciarCart,
        shoppingCart,
        deleteCart,
        cantidadCart,
      }}
    >
      {children}
    </newContext.Provider>
  );
};
