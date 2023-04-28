import "./ProfilePage.css";
import OrderCard from "../../components/orderCard/OrderCard";
import { useQuery } from "@tanstack/react-query";
import { UserInterface } from "../../types/Types";
import axios from "axios";
import useAuthStore from "../../zustand/AuthStore";

const ProfilePage = () => {
  const user = useAuthStore((state) => state.user);

  const { data } = useQuery<UserInterface>({
    queryKey: ["findUserByEmail"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_APP_API_URL}/api/user/${user}`)
        .then((res) => res.data),
  });

  return (
    <div className="profilepage">
      <div className="profilepage-banner">
        <div className="profilepage-container">
          <section className="profilepage-header">
            <div>
              <img className="profilepage-image" src={data?.imageUrl} />
            </div>
            <hr
              style={{
                width: "90%",
                borderBottom: "3px solid gray",
                marginTop: "20px",
              }}
            />
            <div className="profilepage-info">
              <span>Fullname: {data?.name}</span>
              <span>Street: {data?.street}</span>
              <span>Barangay: {data?.barangay}</span>
              <span>Postal code: {data?.postalCode}</span>
              <span>Municipality: {data?.municipality}</span>
              <span>City: {data?.city}</span>
              <span>Contact number: {data?.contactNumber}</span>
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
