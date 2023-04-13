import "./Category.css";

import softdrinksImg from "../../assets/softdrinks.jpg";
import snacksImg from "../../assets/snacks.png";
import fruitsImg from "../../assets/fruits.jpg";
import vegetablesImg from "../../assets/vegetables.jpg";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Category = () => {
  const categories = [
    { name: "Soft Drinks", image: softdrinksImg },
    { name: "Snacks", image: snacksImg },
    { name: "Fruits", image: fruitsImg },
    { name: "Vegetables", image: vegetablesImg },
  ];

  return (
    <Carousel responsive={responsive} containerClass="carousel-container">
      {categories.map((category) => (
        <div key={category.name} className="category">
          <img
            className="category-image"
            src={category.image}
            alt={category.name}
          />
          <div className="category-name">{category.name}</div>
        </div>
      ))}
    </Carousel>
  );
};

export default Category;
