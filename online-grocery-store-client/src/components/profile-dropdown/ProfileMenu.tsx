import "./ProfileMenu.css";
import { useState } from "react";
import images from "../../assets/images.jpg";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown" onClick={toggleProfile}>
      <img src={images} alt="profile" className="top-avatar" />
      {isOpen && (
        <div className="profile-menu">
          <div className="profile-menu-top">
            <img
              src="https://i.ibb.co/MBtjqXQ/no=avatar.gif"
              alt=""
              id="circle-avatar"
            />
            <p>Christine Joy Aliser</p>
          </div>
          <Link to="/profile">
            <button className="profile-menu-btn">See Profile</button>
          </Link>
          <div className="logout-container">
            <button className="btnLogout">Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
