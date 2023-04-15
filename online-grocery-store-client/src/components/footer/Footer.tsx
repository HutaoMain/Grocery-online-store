import "./Footer.css";
import {
  BsFacebook,
  BsWhatsapp,
  BsMailbox,
  BsFillTelephoneFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <section className="footer-left">
          <div className="footer-logo">
            <h1>Combra</h1>
            <img
              src="https://cdn.logo.com/hotlink-ok/logo-social.png"
              alt="sti logo"
              style={{
                height: "60px",
                width: "auto",
                marginLeft: "3px",
              }}
            />
          </div>
          <p className="footer-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="footer-socialcontainer">
            <div color="3B5999" className="footer-socialicon">
              <BsFacebook />
            </div>
            <div color="49C358" className="footer-socialicon">
              <BsWhatsapp />
            </div>
          </div>
        </section>
        <section className="footer-right">
          <h3 className="footer-title">Contact</h3>
          <div className="footer-contactitem">
            <BsFillHouseDoorFill style={{ marginRight: "10px" }} /> 0220 OD,
            Purok12 Brgy.San Agustin Trece Martires City, Cavite 4109
          </div>
          <div className="footer-contactitem">
            <BsFillTelephoneFill style={{ marginRight: "10px" }} />{" "}
            +612345678910
          </div>
          <div className="footer-contactitem">
            <BsMailbox style={{ marginRight: "10px" }} />{" "}
            christinejoyalicer@gmail.com
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
