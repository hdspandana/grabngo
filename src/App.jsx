import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";
import Cart from "./components/Cart.jsx";
import Profile from "./components/Profile.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="navbar">
        <h2>🍴 GrabNGo</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
