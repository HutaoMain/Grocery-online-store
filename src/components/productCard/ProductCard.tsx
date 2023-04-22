import { CgRemoveR } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import "./ProductCard.css";
import { useCartStore } from "../../zustand/CartStore";
import React, { useState } from "react";
import { ProductInterface } from "../../types/Types";

interface Props {
  product: ProductInterface;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantity = (type: string) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      product.quantity >= quantity + 1 && setQuantity(quantity + 1);
    }

    if (quantity > product.quantity) {
      setQuantity(0);
    }
  };

  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="product-card">
      <section className="product-heart-fav">
        <AiFillHeart />
      </section>
      <section>
        <img
          className="product-image"
          src={product.imageUrl}
          alt={product.productName}
        />
      </section>
      <section className="product-info-container">
        <section className="product-info">
          <div className="product-name-section">
            <span className="product-category">
              {product.category?.categoryName}
            </span>
            <span className="product-name">{product.productName}</span>
          </div>
          <div className="product-price-section">
            <span className="product-price">₱{product.price}</span>
            <span className="product-quantity">{product.quantity}pcs</span>
          </div>
        </section>
        <section className="product-btns">
          <div className="product-quantity-btn">
            <CgRemoveR
              onClick={() => handleQuantity("dec")}
              style={{ cursor: "pointer", fontSize: "20px" }}
            />
            {/* <span style={{ fontSize: "20px" }}>10</span> */}
            <input
              type="number"
              className="product-amount"
              value={quantity}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setQuantity(value);
                if (value > product.quantity) {
                  window.alert(
                    `The quantity cannot be greater than ${product.quantity}`
                  );
                  setQuantity(product.quantity);
                }
              }}
              min="1"
              max={product.quantity}
              disabled={product.quantity < 1}
            />
            <BiAddToQueue
              onClick={() => handleQuantity("inc")}
              style={{ cursor: "pointer", fontSize: "20px" }}
            />
          </div>
          <div>
            <AiOutlineShoppingCart
              onClick={() => addItem(product, quantity)}
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductCard;
