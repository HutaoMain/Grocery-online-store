import { CgRemoveR } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import "./ProductCard.css";
import { useCartStore } from "../../zustand/CartStore";
import { useState } from "react";

interface products {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  product: any;
}

const ProductCard = ({ product, image, name, price, quantity }: products) => {
  const [getQuantity, setQuantity] = useState<number>(1);
  const addItem = useCartStore((state) => state.addItem);

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
              value={getQuantity}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setQuantity(value);
              }}
              min="1"
              // max={product.quantity}
            />
            <BiAddToQueue style={{ cursor: "pointer", fontSize: "20px" }} />
          </div>
          <div>
            <AiOutlineShoppingCart
              onClick={() => addItem(product, getQuantity)}
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductCard;
