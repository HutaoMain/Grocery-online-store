import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import ProfileMenu from "../profile-dropdown/ProfileMenu";
import Badge from "@mui/material/Badge";
import { useCartStore } from "../../zustand/CartStore";

const Navbar = () => {
  const cart = useCartStore((state) => state.items);

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
          to="/checkout"
          className={`nav-item ${
            location.pathname === "/cart" ? "active" : ""
          }`}
        >
          <Badge badgeContent={cart.length} color="primary">
            <AiOutlineShoppingCart />
          </Badge>

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
          to="/favorite"
          className={`nav-item ${
            location.pathname === "/favorite" ? "active" : ""
          }`}
        >
          <TbJewishStarFilled />
          <span className="nav-label">Favorite</span>
        </Link>
        <div className="nav-item">
          <ProfileMenu />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
