import "./ProfilePage.css";
import profilepic from "../../assets/images.jpg";
import OrderCard from "../../components/orderCard/OrderCard";

const ProfilePage = () => {
  return (
    <div className="profilepage">
      <div className="profilepage-banner">
        <div className="profilepage-container">
          <section className="profilepage-header">
            <div>
              <img className="profilepage-image" src={profilepic} />
            </div>
            <hr
              style={{
                width: "90%",
                borderBottom: "3px solid gray",
                marginTop: "20px",
              }}
            />
            <div className="profilepage-info">
              <span>name</span>
              <span>address</span>
              <span>number</span>
            </div>
          </section>
          <section className="profilepage-body">
            <div className="profilepage-btns">
              <button className="profilepage-btn-list">All</button>
              <button className="profilepage-btn-list">Delivered</button>
              <button className="profilepage-btn-list">Pending</button>
              <button className="profilepage-btn-list">Cancelled</button>
            </div>
            <div className="profilepage-order-container">
              <OrderCard />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
