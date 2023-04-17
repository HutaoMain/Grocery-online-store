import Category from "../../components/category/Category";
import ProductMapping from "../../components/bestProducts/ProductMapping";
import "./Home.css";
import combrabanner from "/combrabanner2.svg";

const Home = () => {
  return (
    <div className="home">
      <img className="combra-banner" src={combrabanner} alt="" />
      <Category />
      <ProductMapping />
    </div>
  );
};

export default Home;
