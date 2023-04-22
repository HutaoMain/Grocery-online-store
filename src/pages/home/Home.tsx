import BestCategories from "../../components/bestCategories/BestCategories";
import BestProducts from "../../components/bestProducts/BestProducts";
import "./Home.css";
import combrabanner from "/combrabanner2.svg";

const Home = () => {
  return (
    <div className="home">
      <img className="combra-banner" src={combrabanner} alt="" />
      <BestCategories />
      <BestProducts />
    </div>
  );
};

export default Home;
