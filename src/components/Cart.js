import React, { useContext } from "react";
import { CartContext } from "../context/context-cart";
import { useRef, useCallback } from "react";
import useRazorpay from "react-razorpay";

const Cart = () => {
  const { cartData } = useContext(CartContext);
  let total = useRef();
  total.current = 0;
  const RazorPay = useRazorpay();
  const razorpayDisplay = useCallback(
    async (total) => {
      const options = {
        key: "rzp_test_RJYhPzEPOfqAvy",
        amount: total,
        currency: "INR",
        name: "gamestore",
        description: "game transaction",
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: "irshad",
          email: "irshad.mohd8186@gmail.com",
          contact: "123245",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new RazorPay(options);
      rzp1.open();
    },
    [RazorPay]
  );
  return (
    <div>
      <section>
        {cartData.map((item) => {
          total.current = total.current + item.price;
          return (
            <article>
              {/* <img src="" alt="" /> */}
              <article>{item.title}</article>
              <article>{item.price}</article>
              <button>Remove from cart</button>
            </article>
          );
        })}
      </section>
      <section>
        Billing information
        <article>Total price: Rs {total.current}</article>
        <button
          onClick={() => {
            razorpayDisplay(total.current * 100);
          }}
        >
          Checkout
        </button>
      </section>
    </div>
  );
};

export default Cart;
