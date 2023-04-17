import { useCartStore } from "../../zustand/CartStore";
import { CgRemoveR } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";
import { useState } from "react";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const [getQuantity, setQuantity] = useState<Number>();
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const increaseItem = useCartStore((state) => state.increaseItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);

  return (
    <div className="checkout">
      <h1>Check Out</h1>
      <div className="checkout-container">
        <div>
          <h2>Here's what you're getting!</h2>
        </div>
        <hr
          style={{
            border: "3px solid gray",
            width: "90%",
            marginBottom: "20px",
          }}
        />
        {/* this will be grid (4 columns) */}
        <div className="checkout-columnname">
          <span>You have {items.length} items in your order.</span>
          <span>PRICE</span>
          <span>QUANTITY</span>
          <span>TOTAL</span>
        </div>
        {items?.map((item) => (
          <section className="checkout-product">
            <div className="checkout-image-name">
              <img
                className="checkout-image"
                src={item.image}
                alt={item.name}
              />
              <span>{item.name}</span>
              {/* add category here */}
            </div>
            <div>
              <span>{item.price}</span>
            </div>
            {/* <div>
              <span>{item.quantity}</span>
            </div> */}
            <div className="product-quantity-btn">
              <CgRemoveR
                onClick={() => decreaseItem(item.id)}
                style={{ cursor: "pointer", fontSize: "20px" }}
              />
              <input
                type="number"
                className="product-amount"
                defaultValue="1"
                min="1"
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  setQuantity(value);
                }}
              />
              <BiAddToQueue
                onClick={() => increaseItem(item.id)}
                style={{ cursor: "pointer", fontSize: "20px" }}
              />
            </div>
            <span>{item.price * item.quantity}</span>
            <button
              className="checkout-cancelbtn"
              onClick={() => removeItem(item.id)}
            >
              Cancel
            </button>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
