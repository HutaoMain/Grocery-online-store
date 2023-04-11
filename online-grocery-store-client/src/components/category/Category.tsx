import "./Category.css";

import softdrinksImg from "../../assets/softdrinks.jpg";
import snacksImg from "../../assets/snacks.png";
import fruitsImg from "../../assets/fruits.jpg";
import vegetablesImg from "../../assets/vegetables.jpg";

interface CategoryType {
  name: string;
  image: string;
}

const Category = () => {
  const categories: CategoryType[] = [
    { name: "Soft Drinks", image: softdrinksImg },
    { name: "Snacks", image: snacksImg },
    { name: "Fruits", image: fruitsImg },
    { name: "Vegetables", image: vegetablesImg },
  ];
  return (
    <div>
      <h1>Category</h1>
      <div className="category-mapping">
        {categories.map((category) => (
          <div key={category.name} className="category">
            <img src={category.image} alt={category.name} />
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
