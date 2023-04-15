import Category from "../../components/category/Category";
// import ImageSlider from "../../components/imageSlider/ImageSlider";
import "./Home.css";
import combrabanner from "/combrabanner2.svg";

const Home = () => {
  return (
    <div className="home">
      <img className="combra-banner" src={combrabanner} alt="" />
      <Category />
    </div>
  );
};

export default Home;
