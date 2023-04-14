import Category from "../../components/category/Category";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Category />
      <ImageSlider />
    </div>
  );
};

export default Home;
