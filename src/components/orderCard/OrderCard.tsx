import { useEffect, useState } from "react";
import "./OrderCard.css";
import { orderInterface, orderListInterface } from "../../types/Types";
import Modal from "react-modal";
import UploadReceipt from "../uploadReceipt/UploadReceipt";

interface IOrderData {
  orderData: orderInterface;
}

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

const OrderCard = ({ orderData }: IOrderData) => {
  const [orderListJson, setOrderListJson] = useState<orderListInterface[]>();
  const [openUploadReceipt, setOpenUploadReceipt] = useState<boolean>(false);

  useEffect(() => {
    setOrderListJson(JSON.parse(orderData.orderList));
  }, [orderData]);

  const toggleOpenUploadReceipt = () => {
    setOpenUploadReceipt(!openUploadReceipt);
  };

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
      <div
        style={{
          padding: "10px 0",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <span>Total price: ₱{orderData.totalPrice}</span>
        {orderData.paymentMethod === "gcash" &&
        orderData.status === "Pending" &&
        orderData.receipt === null ? (
          <button
            className="ordercard-uploadbtn"
            onClick={toggleOpenUploadReceipt}
          >
            Upload Receipt
          </button>
        ) : null}
      </div>
      <Modal
        isOpen={openUploadReceipt}
        onRequestClose={toggleOpenUploadReceipt}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <UploadReceipt
          orderData={orderData}
          toggleOpenUploadReceipt={toggleOpenUploadReceipt}
        />
      </Modal>
    </div>
  );
};

export default OrderCard;
