import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, toggleCart } = useContext(CartContext);

  return (
    <div className="cart-popup">
      <h3>🛒 Your Cart</h3>
      <button onClick={toggleCart}>Close</button>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
