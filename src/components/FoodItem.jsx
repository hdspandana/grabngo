import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function FoodItem({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        width: "220px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px" }}>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <button
          style={{
            backgroundColor: "#ff6f00",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
