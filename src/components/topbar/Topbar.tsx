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
          elisa.mortel@gmail.com
          <BsFillTelephoneFill /> +69300362282
        </span>

        {/* <span className="topbar-itemlist">
          <BsFacebook />
          <BsWechat />
          <BsInstagram />
        </span> */}
      </div>
    </div>
  );
};

export default Topbar;
