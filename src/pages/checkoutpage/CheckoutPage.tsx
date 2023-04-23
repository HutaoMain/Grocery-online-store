import { useCartStore } from "../../zustand/CartStore";
import { CgRemoveR } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const increaseItem = useCartStore((state) => state.increaseItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);
  const total = useCartStore((state) => state.total);

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
                src={item.imageUrl}
                alt={item.productName}
              />
              <span>{item.productName}</span>
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
              {/* <input
                type="number"
                className="product-amount"
                value={item.quantity}
                min="1"
              /> */}
              <span>{item.quantity}</span>
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

        <hr
          style={{
            border: "3px solid gray",
            width: "90%",
            marginBottom: "20px",
          }}
        />
        <div className="checkout-ordersummary">
          <h1>Order Summary</h1>
          <div className="checkout-ordersummary-container">
            <section className="checkout-ordersummary-left">
              <div className="checkout-ordersummary-itemlist">
                <label>Fullname</label>
                <input type="text" placeholder="fullname" />
              </div>
              <div className="checkout-ordersummary-itemlist">
                <label>Full Address</label>
                <input type="text" placeholder="Full Address" />
              </div>
              <div className="checkout-ordersummary-itemlist">
                <label>Barangay</label>
                <input type="text" placeholder="Barangay" />
              </div>
              <div className="checkout-ordersummary-itemlist">
                <label>City</label>
                <input type="text" placeholder="City" />
              </div>
              <div className="checkout-ordersummary-itemlist">
                <label>Payment method</label>
                <select className="checkout-payment-method">
                  <option value="pickup">Pickup</option>
                  <option value="cod">COD</option>
                  <option value="gcash">GCash</option>
                </select>
              </div>
            </section>
            <section className="checkout-ordersummary-right">
              <h2 style={{ marginTop: "0" }}>Order Details:</h2>
              <section className="checkout-ordersummary-totalsection">
                <span>{items.length} items</span>
                <span>₱{total}</span>
              </section>
              <section>
                <h1>TOTAL</h1>
                <h1>₱{total}</h1>
              </section>
              <button className="checkout-btn">Checkout</button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
