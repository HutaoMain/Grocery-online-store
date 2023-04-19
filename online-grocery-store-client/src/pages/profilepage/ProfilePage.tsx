import "./ProfilePage.css";
import profilepic from "../../assets/images.jpg";

const ProfilePage = () => {
  return (
    <div className="profilepage">
      <div className="profilepage-container">
        <section className="profilepage-sidebar">
          <div>
            <img className="profilepage-image" src={profilepic} />
          </div>
          <div className="profilepage-info">
            <span>name</span>
            <span>address</span>
            <span>number</span>
          </div>
        </section>
        <section className="profilepage-body">
          <div className="profilepage-btns">
            <button className="profilepage-btn-list">Delivered</button>
            <button className="profilepage-btn-list">Pending</button>
            <button className="profilepage-btn-list">Cancelled</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
