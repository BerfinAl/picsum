import React, { useContext, useState } from "react";
import { redirect } from "react-router-dom";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [btnText, setBtnText] = useState("Place Order");

  const items = cartItems.map((item) => {
    return <CartItem key={item.id} img={item} />;
  });

  const total = cartItems.length * 5.99;

  function placeOrder(e) {
    setBtnText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setBtnText("Place Order");
      emptyCart();
      redirect("/cart");
    }, 1500);
  }

  return (
    <div className="checkout-container">
      <h1>Check Out</h1>
      <div>{items}</div>
      <h2 className="total">Total: ${total} </h2>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{btnText}</button>
        </div>
      ) : (
        <p> You have no items in your cart. </p>
      )}
    </div>
  );
}
