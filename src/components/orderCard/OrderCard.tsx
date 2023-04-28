import { useQuery } from "@tanstack/react-query";
import "./OrderCard.css";
import { orderInterface } from "../../types/Types";
import axios from "axios";
import useAuthStore from "../../zustand/AuthStore";
import { useEffect, useState } from "react";

const OrderCard = () => {
  const user = useAuthStore((state) => state.user);

  const [orderListJson, setOrderListJson] = useState();

  const { data } = useQuery<orderInterface[]>({
    queryKey: ["findOrderByUserMail"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_APP_API_URL}/api/order/userEmail/${user}`)
        .then((res) => res.data),
  });

  console.log("orderListJson:", data);

  return (
    <div className="ordercard">
      <div className="ordercard-number-container">
        <h2>Order #</h2>
        <span>date and time</span>
      </div>
      <div>
        {data?.map((item) => (
          <div className="ordercard-item-container" key={item.id}>
            <section>
              <img
                className="ordercard-image"
                src={item.image}
                alt={item.name}
              />
            </section>
            <section className="ordercard-item-info">
              <span>
                <b>{item.name}</b>
              </span>
              <span>{item.description}</span>
              <div className="ordercard-quantity-price-container">
                <span>
                  <label>Price: </label>
                  <b>{item.price}</b>
                </span>
                <span>
                  <label>Quantity: </label>
                  <b>{item.quantity}</b>
                </span>
              </div>
            </section>
          </div>
        ))}
        <hr />
        <div>X {data?.length}</div>
        <div>X Complete</div>
      </div>
    </div>
  );
};

export default OrderCard;
