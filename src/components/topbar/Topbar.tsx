import "./Topbar.css";
import { MdEmail } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsWechat,
  BsInstagram,
} from "react-icons/bs";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <span className="topbar-itemlist">
          <MdEmail />
          christinejoyalicer@gmail.com |
          <BsFillTelephoneFill /> +12345678910
        </span>

        <span className="topbar-itemlist">
          <BsFacebook />
          <BsWechat />
          <BsInstagram />
        </span>
      </div>
    </div>
  );
};

export default Topbar;
