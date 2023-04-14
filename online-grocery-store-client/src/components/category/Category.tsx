import "./Category.css";
import softdrinksImg from "../../assets/softdrinks.jpg";
import snacksImg from "../../assets/snacks.png";
import fruitsImg from "../../assets/fruits.jpg";
import vegetablesImg from "../../assets/vegetables.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  { name: "Soft Drinks", image: softdrinksImg },
  { name: "Snacks", image: snacksImg },
  { name: "Fruits", image: fruitsImg },
  { name: "Vegetables", image: vegetablesImg },
  { name: "Meat", image: "https://picsum.photos/200/300" },
  { name: "Dairy", image: "https://picsum.photos/200/300" },
  { name: "Frozen Foods", image: "https://picsum.photos/200/300" },
  { name: "Canned Foods", image: "https://picsum.photos/200/300" },
  { name: "Meat", image: "https://picsum.photos/200/300" },
  { name: "Dairy", image: "https://picsum.photos/200/300" },
  { name: "Frozen Foods", image: "https://picsum.photos/200/300" },
  { name: "Canned Foods", image: "https://picsum.photos/200/300" },
];

const Category = () => {
  const visibleRows: number = 1;
  const [ROW_SIZE, setRowSize] = useState<number>(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1360) {
        // desktop
        setRowSize(5);
      } else if (window.innerWidth >= 960 && window.innerWidth < 1360) {
        // tablet
        setRowSize(3);
      } else if (window.innerWidth >= 768) {
        // mobile
        setRowSize(1);
      }
    };

    handleResize(); // call once on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleCategories = categories.slice(0, visibleRows * ROW_SIZE);

  return (
    <div className="category">
      <Link to="/categories">
        <button className="showmore-btn">Show More</button>
      </Link>
      <div className="categories">
        {visibleCategories.map((category) => (
          <div className="category-container" key={category.name}>
            <img
              className="category-image"
              src={category.image}
              alt={category.name}
            />
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
