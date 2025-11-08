import FoodItem from "../components/FoodItem.jsx";

const foodItems = [
  { id: 1, name: "Masala Dosa", price: "₹40", image: "/src/assets/pasta.jpg" },
  { id: 2, name: "Veg Sandwich", price: "₹30", image: "/src/assets/s.jpg" },
  { id: 3, name: "Coffee", price: "₹15", image: "/src/assets/juice.jpg" },
  { id: 4, name: "Idli Sambar", price: "₹25", image: "/src/assets/pasta.jpg" },
  { id: 5, name: "Fried Rice", price: "₹60", image: "/src/assets/pasta.jpg" },
  { id: 6, name: "Burger", price: "₹80", image: "/src/assets/burger.jpg" },
  { id: 7, name: "Pizza", price: "₹120", image: "/src/assets/pizza.jpg" },
  { id: 8, name: "Lemon Juice", price: "₹20", image: "/src/assets/juice.jpg" },
];

export default function Menu() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🍽️ GrabNGo Menu</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {foodItems.map((item) => (
          <FoodItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
