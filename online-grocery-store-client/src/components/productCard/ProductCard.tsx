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
      <section className="product-heart-fav">
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
          <div className="product-quantity-btn">
            <CgRemoveR style={{ cursor: "pointer", fontSize: "20px" }} />
            {/* <span style={{ fontSize: "20px" }}>10</span> */}
            <input
              type="number"
              className="product-amount"
              // value={quantity}
              // onChange={(e) => {
              //   const value = parseInt(e.target.value);
              //   setQuantity(value);
              // }}
              min="1"
              // max={product.quantity}
            />
            <BiAddToQueue style={{ cursor: "pointer", fontSize: "20px" }} />
          </div>
          <div>
            <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductCard;
