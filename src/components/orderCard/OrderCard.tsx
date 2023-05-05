import { useEffect, useState } from "react";
import "./OrderCard.css";
import { orderInterface, orderListInterface } from "../../types/Types";

interface IOrderData {
  orderData: orderInterface;
}

const OrderCard = ({ orderData }: IOrderData) => {
  const [orderListJson, setOrderListJson] = useState<orderListInterface[]>();

  useEffect(() => {
    setOrderListJson(JSON.parse(orderData.orderList));
  }, [orderData]);

  console.log(orderListJson);
  return (
    <div style={{ border: "2px solid green" }}>
      <div style={{ padding: "10px 0" }}>
        <span>{orderData.status}</span>
      </div>
      <hr style={{ borderBottom: "2px solid gray" }} />
      <section className="ordercard">
        {orderListJson?.map((orderItem) => (
          <div className="ordercard-container" key={orderItem.id}>
            <img className="orderlist-image" src={orderItem.imageUrl} alt="" />
            <div className="ordercard-info-container">
              <span>{orderItem.productName}</span>
              <span style={{ color: "gray" }}>{orderItem.description}</span>
              <span>₱{orderItem.price}</span>
              <span>Qty: {orderItem.quantity}</span>
            </div>
          </div>
        ))}
      </section>
      <span>Total price: ₱{orderData.totalPrice}</span>
    </div>
  );
};

export default OrderCard;
