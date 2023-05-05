import "./ProfilePage.css";
import OrderCard from "../../components/orderCard/OrderCard";
import { useQuery } from "@tanstack/react-query";
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import { orderInterface } from "../../types/Types";
import axios from "axios";
import useAuthStore from "../../zustand/AuthStore";
import { useState } from "react";

const ProfilePage = () => {
  const [openAll, setOpenAll] = useState<boolean>(true);
  const [openDelivered, setOpenDelivered] = useState<boolean>(false);
  const [openPending, setOpenPending] = useState<boolean>(false);
  const [openCancelled, setOpenCancelled] = useState<boolean>(false);

  const user = useAuthStore((state) => state.user);

  const { data } = useQuery<orderInterface[]>({
    queryKey: ["findOrderByUserMail"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_APP_API_URL}/api/order/userEmail/${user}`)
        .then((res) => res.data),
  });

  const toggleOpenAll = () => {
    setOpenAll(true);
    setOpenDelivered(false);
    setOpenPending(false);
    setOpenCancelled(false);
  };

  const toggleOpenDelivered = () => {
    setOpenAll(false);
    setOpenDelivered(true);
    setOpenPending(false);
    setOpenCancelled(false);
  };

  const toggleOpenPending = () => {
    setOpenAll(false);
    setOpenDelivered(false);
    setOpenPending(true);
    setOpenCancelled(false);
  };

  const toggleOpenCancelled = () => {
    setOpenAll(false);
    setOpenDelivered(false);
    setOpenPending(false);
    setOpenCancelled(true);
  };

  const delivered = data?.filter((item) => item.status === "Delivered");
  const pending = data?.filter((item) => item.status === "Pending");
  const cancelled = data?.filter((item) => item.status === "Cancelled");

  return (
    <div className="profilepage">
      <div className="profilepage-banner">
        <ProfileHeader />
      </div>
      <section className="profilepage-body">
        <div className="profilepage-btns">
          <button
            className={openAll ? "active" : "profilepage-btn-list"}
            onClick={toggleOpenAll}
          >
            All
          </button>
          <button
            className={openDelivered ? "active" : "profilepage-btn-list"}
            onClick={toggleOpenDelivered}
          >
            Delivered
          </button>
          <button
            className={openPending ? "active" : "profilepage-btn-list"}
            onClick={toggleOpenPending}
          >
            Pending
          </button>
          <button
            className={openCancelled ? "active" : "profilepage-btn-list"}
            onClick={toggleOpenCancelled}
          >
            Cancelled
          </button>
        </div>
        <div className="profilepage-order-container">
          {openAll &&
            data?.map((orderData: orderInterface) => (
              <OrderCard orderData={orderData} key={orderData.id} />
            ))}
          {openDelivered &&
            delivered?.map((orderData: orderInterface) => (
              <OrderCard orderData={orderData} key={orderData.id} />
            ))}
          {openPending &&
            pending?.map((orderData: orderInterface) => (
              <OrderCard orderData={orderData} key={orderData.id} />
            ))}
          {openCancelled &&
            cancelled?.map((orderData: orderInterface) => (
              <OrderCard orderData={orderData} key={orderData.id} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
