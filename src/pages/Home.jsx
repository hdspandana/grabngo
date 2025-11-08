import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🍔 Welcome to GrabNGo</h1>
      <p>Your smart way to order food from your canteen!</p>
      <Link to="/menu">
        <button className="order-btn">Start Ordering</button>
      </Link>
    </div>
  );
}
