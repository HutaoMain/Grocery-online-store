import "./ProfileMenu.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../zustand/AuthStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { UserInterface } from "../../types/Types";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useAuthStore((state) => state.user);
  const clearUser = useAuthStore((state) => state.clearUser);

  const { data } = useQuery<UserInterface>({
    queryKey: ["user"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_APP_API_URL}/api/user/${user}`)
        .then((res) => res.data),
  });

  console.log(data);

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown" onClick={toggleProfile}>
      <img src={data?.imageUrl} alt="profile" className="top-avatar" />
      {isOpen && (
        <div className="profile-menu">
          <div className="profile-menu-top">
            <img src={data?.imageUrl} alt={data?.name} id="circle-avatar" />
            <p>{data?.name}</p>
          </div>
          <Link to="/profile">
            <button className="profile-menu-btn">See Profile</button>
          </Link>
          <div className="logout-container">
            <button className="btnLogout" onClick={clearUser}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
