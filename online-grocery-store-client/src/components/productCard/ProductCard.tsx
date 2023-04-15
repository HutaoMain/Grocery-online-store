import { CgRemoveR } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import "./ProductCard.css";

interface products {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const ProductCard = ({ image, name, price, quantity }: products) => {
  return (
    <div className="product-card">
      <section style={{ textAlign: "end", color: "#A1A1A1" }}>
        <AiFillHeart />
      </section>
      <section>
        <img className="product-image" src={image} alt={name} />
      </section>
      <section className="product-info-container">
        <section className="product-info">
          <div className="product-name-section">
            <span className="product-category">fruits</span>
            <span className="product-name">{name}</span>
          </div>
          <div className="product-price-section">
            <span className="product-price">₱{price}</span>
            <span className="product-quantity">{quantity}pcs</span>
          </div>
        </section>
        <section className="product-btns">
          <div>
            <CgRemoveR style={{ cursor: "pointer" }} />
            <span className="product-quantity-type">10</span>
            <BiAddToQueue style={{ cursor: "pointer" }} />
          </div>
          <div>
            <AiOutlineShoppingCart />
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductCard;
