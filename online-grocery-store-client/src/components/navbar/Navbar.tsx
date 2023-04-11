import "./Navbar.css";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="bottom-nav">
      <section className="bottom-nav-container">
        <a href="#" className="nav-item active">
          <AiFillHome />
          <span className="nav-label">Home</span>
        </a>
        <a href="#" className="nav-item">
          <AiOutlineShoppingCart />
          <span className="nav-label">Cart</span>
        </a>
        <a href="#" className="nav-item">
          <FaProductHunt />
          <span className="nav-label">Products</span>
        </a>
        <a href="#" className="nav-item">
          <TbJewishStarFilled />
          <span className="nav-label">Wishlist</span>
        </a>
      </section>
    </nav>
  );
};

export default Navbar;
