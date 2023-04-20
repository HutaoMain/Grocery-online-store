import fruit from "../../assets/fruits.jpg";
import "./OrderCard.css";

interface order {
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const OrderCard = () => {
  const orderArray: order[] = [
    {
      image: fruit,
      name: "Fruit",
      description: "best fruit",
      price: 10,
      quantity: 10,
    },
  ];

  return (
    <div className="ordercard">
      <div className="ordercard-number-container">
        <h2>Order #</h2>
        <span>date and time</span>
      </div>
      <div>
        {orderArray.map((item) => (
          <div className="ordercard-item-container">
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
        <div>X {orderArray.length}</div>
        <div>X Complete</div>
      </div>
    </div>
  );
};

export default OrderCard;
