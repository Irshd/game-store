import { createContext } from "react";
import { useState } from "react";
const CartContext = createContext();
const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const addCartData = (data) => {
    setCartData([...cartData, data]);
  };
  return (
    <CartContext.Provider value={{ cartData, addCartData }}>
      {props.children}
    </CartContext.Provider>
  );
};
export { CartContext, CartProvider };
