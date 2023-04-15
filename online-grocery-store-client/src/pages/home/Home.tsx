import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import ProductMapping from "../../components/productMapping/ProductMapping";
import "./Home.css";
import combrabanner from "/combrabanner2.svg";

const Home = () => {
  return (
    <div className="home">
      <img className="combra-banner" src={combrabanner} alt="" />
      <Category />
      <ProductMapping />
      <Footer />
    </div>
  );
};

export default Home;
