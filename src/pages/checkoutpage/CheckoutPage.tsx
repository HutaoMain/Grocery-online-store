import { useCartStore } from "../../zustand/CartStore";
import { CgRemoveR } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";
import "./CheckoutPage.css";
import useAuthStore from "../../zustand/AuthStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { UserInterface, shippingAdd } from "../../types/Types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface Errors {
  street: string;
  barangay: string;
  postalCode: string;
  municipality: string;
  city: string;
  contactNumber: string;
}

const CheckoutPage = () => {
  const items = useCartStore((state) => state.items);
  const user = useAuthStore((state) => state.user);
  const removeItem = useCartStore((state) => state.removeItem);
  const increaseItem = useCartStore((state) => state.increaseItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);
  const total = useCartStore((state) => state.total);

  const navigate = useNavigate();

  const { data } = useQuery<UserInterface>({
    queryKey: ["checkOutByUser"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_APP_API_URL}/api/user/${user}`)
        .then((res) => res.data),
  });

  const [shippingAdd, setShippingAdd] = useState<shippingAdd>({
    street: data?.street || "",
    barangay: data?.barangay || "",
    postalCode: data?.postalCode || 0,
    municipality: data?.municipality || "",
    city: data?.city || "",
    contactNumber: data?.contactNumber || 0,
    modeOfPayment: "Pickup",
  });

  const [error, setError] = useState<Errors>();

  const itemsToString = JSON.stringify(items);

  useEffect(() => {
    const newErrors: Errors = {
      street: "",
      barangay: "",
      city: "",
      contactNumber: "",
      municipality: "",
      postalCode: "",
    };

    if (shippingAdd.street === "") {
      newErrors.street = "Please enter your street";
    }

    if (shippingAdd.barangay === "") {
      newErrors.barangay = "Please enter your barangay";
    }

    if (shippingAdd.city === "") {
      newErrors.city = "Please enter your city";
    }

    if (shippingAdd.contactNumber === 0) {
      newErrors.contactNumber = "Please enter your contact number";
    }

    if (shippingAdd.municipality === "") {
      newErrors.municipality = "Please enter your municipality";
    }

    if (shippingAdd.postalCode === 0) {
      newErrors.postalCode = "Please enter your postal code";
    }

    setError(newErrors);
  }, [shippingAdd]);

  console.log("log error usestate", error);

  const handlePlaceOrder = async () => {
    const orderData = {
      products: items.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
      })),
      email: user,
      userFullName: data?.name,
      totalPrice: total,
      orderList: itemsToString,
      status: "Pending",
      street: shippingAdd.street,
      barangay: shippingAdd.barangay,
      postalCode: shippingAdd.postalCode,
      municipality: shippingAdd.municipality,
      city: shippingAdd.city,
      contactNumber: shippingAdd.contactNumber,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/api/order/create`,
        orderData
      );
      window.localStorage.removeItem("cart-storage");
      // handleUpdateAddress();
      toast("Successfully ordered!", {
        type: "success",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

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
          <section className="checkout-product" key={item.id}>
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
                <label>Street</label>
                <input
                  type="text"
                  placeholder="Street"
                  defaultValue={shippingAdd.street}
                  onChange={(e) => {
                    setShippingAdd((data) => ({
                      ...data,
                      street: e.target.value,
                    }));
                  }}
                />
                {shippingAdd.street === "" ? (
                  <span style={{ color: "red" }}>{error?.street}</span>
                ) : null}
              </div>
              <div className="checkout-ordersummary-itemlist">
                <label>Barangay</label>
                <input
                  type="text"
                  placeholder="Barangay"
                  defaultValue={shippingAdd.barangay}
                  onChange={(e) => {
                    setShippingAdd((data) => ({
                      ...data,
                      barangay: e.target.value,
                    }));
                  }}
                />
                {shippingAdd.barangay === "" ? (
                  <span style={{ color: "red" }}>{error?.barangay}</span>
                ) : null}
              </div>
              <div className="checkout-ordersummary-itemlist">
                <label>Municipality</label>
                <input
                  type="text"
                  placeholder="Municipality"
                  defaultValue={shippingAdd.municipality}
                  onChange={(e) => {
                    setShippingAdd((data) => ({
                      ...data,
                      municipality: e.target.value,
                    }));
                  }}
                />
                {shippingAdd.municipality === "" ? (
                  <span style={{ color: "red" }}>{error?.municipality}</span>
                ) : null}
              </div>
              <div className="checkout-ordersummary-itemlist">
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  defaultValue={shippingAdd.city}
                  onChange={(e) => {
                    setShippingAdd((data) => ({
                      ...data,
                      city: e.target.value,
                    }));
                  }}
                />
                {shippingAdd.city === "" ? (
                  <span style={{ color: "red" }}>{error?.city}</span>
                ) : null}
              </div>
              <div className="checkout-ordersummary-itemlist">
                <label>Postal Code</label>
                <input
                  type="number"
                  placeholder="Postal Code"
                  className="checkout-postalcode"
                  defaultValue={shippingAdd.postalCode}
                  onChange={(e) => {
                    setShippingAdd((data) => ({
                      ...data,
                      postalCode: parseInt(e.target.value),
                    }));
                  }}
                />
                {shippingAdd.postalCode === 0 ? (
                  <span style={{ color: "red" }}>{error?.postalCode}</span>
                ) : null}
              </div>
              <div className="checkout-ordersummary-itemlist">
                <label>Contact Number</label>
                <input
                  type="number"
                  placeholder="Contact Number"
                  className="checkout-postalcode"
                  defaultValue={shippingAdd.contactNumber}
                  onChange={(e) => {
                    setShippingAdd((data) => ({
                      ...data,
                      contactNumber: parseInt(e.target.value),
                    }));
                  }}
                />
                {shippingAdd.contactNumber === 0 ? (
                  <span style={{ color: "red" }}>{error?.contactNumber}</span>
                ) : null}
              </div>
              <div className="checkout-ordersummary-itemlist">
                <label>Payment method</label>
                <select
                  className="checkout-payment-method"
                  onChange={(e) => {
                    setShippingAdd((data) => ({
                      ...data,
                      modeOfPayment: e.target.value,
                    }));
                  }}
                >
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
              <button
                disabled={
                  total === 0 ||
                  !!error?.street ||
                  !!error?.barangay ||
                  !!error?.city ||
                  !!error?.contactNumber ||
                  !!error?.municipality ||
                  !!error?.postalCode
                }
                className="checkout-btn"
                onClick={handlePlaceOrder}
              >
                Checkout
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
