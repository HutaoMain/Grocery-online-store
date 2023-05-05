import "./ProfileHeader.css";
import { useQuery } from "@tanstack/react-query";
import { UserInterface } from "../../types/Types";
import axios from "axios";
import useAuthStore from "../../zustand/AuthStore";

const ProfileHeader = () => {
  const user = useAuthStore((state) => state.user);

  const { data } = useQuery<UserInterface>({
    queryKey: ["findUserByEmail"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_APP_API_URL}/api/user/${user}`)
        .then((res) => res.data),
  });

  return (
    <div className="profileheader-container">
      <section className="profileheader">
        <div>
          <img className="profileheader-image" src={data?.imageUrl} />
        </div>
        <hr
          style={{
            width: "90%",
            borderBottom: "3px solid gray",
            marginTop: "20px",
          }}
        />
        <div className="profileheader-info">
          <span>Fullname: {data?.name}</span>
          <span>Street: {data?.street}</span>
          <span>Barangay: {data?.barangay}</span>
          <span>Postal code: {data?.postalCode}</span>
          <span>Municipality: {data?.municipality}</span>
          <span>City: {data?.city}</span>
          <span>Contact number: {data?.contactNumber}</span>
        </div>
      </section>
    </div>
  );
};

export default ProfileHeader;
