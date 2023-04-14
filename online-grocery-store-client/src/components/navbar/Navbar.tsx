import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <section className="bottom-nav-container">
        <Link
          to="/"
          className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
        >
          <AiFillHome />
          <span className="nav-label">Home</span>
        </Link>
        <Link
          to="/cart"
          className={`nav-item ${
            location.pathname === "/cart" ? "active" : ""
          }`}
        >
          <AiOutlineShoppingCart />
          <span className="nav-label">Cart</span>
        </Link>
        <Link
          to="/products"
          className={`nav-item ${
            location.pathname === "/products" ? "active" : ""
          }`}
        >
          <FaProductHunt />
          <span className="nav-label">Products</span>
        </Link>
        <Link
          to="/wishlist"
          className={`nav-item ${
            location.pathname === "/wishlist" ? "active" : ""
          }`}
        >
          <TbJewishStarFilled />
          <span className="nav-label">Wishlist</span>
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
