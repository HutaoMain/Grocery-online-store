import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import ProfileMenu from "../profileDropdown/ProfileMenu";
import Badge from "@mui/material/Badge";
import { useCartStore } from "../../zustand/CartStore";
import Modal from "react-modal";
import { useState } from "react";
import ButtonFacebook from "../buttonFacebook/ButtonFacebook";
import ButtonGoogle from "../buttonGoogle/ButtonGoogle";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    padding: "50px",
  },
};

Modal.setAppElement("#root");

const Navbar = ({ user }: any) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const cart = useCartStore((state) => state.items);

  const location = useLocation();

  const toggleModalOpen = () => {
    setIsOpen(!modalIsOpen);
  };

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
          {user ? (
            <ProfileMenu />
          ) : (
            <button className="nav-loginbtn" onClick={toggleModalOpen}>
              Login
            </button>
          )}
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModalOpen}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <div className="nav-login-container">
          <h1>Welcome back!</h1>
          <span>Please login to your desired method.</span>
          <ButtonGoogle />
          <ButtonFacebook />
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
