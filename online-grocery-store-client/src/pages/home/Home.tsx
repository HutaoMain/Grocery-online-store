import Category from "../../components/category/Category";
import Search from "../../components/search/Search";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Search />
      <Category />
    </div>
  );
};

export default Home;
