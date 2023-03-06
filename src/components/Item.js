import React, { useContext } from "react";
import { CartContext } from "../context/context-cart";
const Item = ({ item }) => {
  const { addCartData } = useContext(CartContext);

  return (
    <section className="card col-4">
      <img className="card-image" src={item.image} alt="game" />
      <article className="card-title">{item.title}</article>
      <article className="card-description">{item.description}</article>
      <section className="card-footer">
        <article className="price">Price : {item.price}</article>
        <button
          className="cart-button"
          onClick={() => {
            addCartData(item);
          }}
        >
          Add to Cart
        </button>
      </section>
    </section>
  );
};

export default Item;
