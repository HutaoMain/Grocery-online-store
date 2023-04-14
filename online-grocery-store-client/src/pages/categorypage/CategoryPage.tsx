import Search from "../../components/search/Search";
import "./CategoryPage.css";
import softdrinksImg from "../../assets/softdrinks.jpg";
import snacksImg from "../../assets/snacks.png";
import fruitsImg from "../../assets/fruits.jpg";
import vegetablesImg from "../../assets/vegetables.jpg";
import { useState } from "react";

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  { name: "Soft Drinks", image: softdrinksImg },
  { name: "Snacks", image: snacksImg },
  { name: "Fruits", image: fruitsImg },
  { name: "Vegetables", image: vegetablesImg },
  { name: "Vegetables", image: vegetablesImg },
];

const CategoryPage = () => {
  const [filteredCategories, setFilteredCategories] =
    useState<Category[]>(categories);

  const handleSearch = (searchTerm: string) => {
    const filtered = categories.filter((category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  return (
    <div className="category-page">
      <Search handleSearch={handleSearch} />
      <section className="category-list-container">
        {filteredCategories.map((category) => (
          <div className="category-container" key={category.name}>
            <img
              className="category-image"
              src={category.image}
              alt={category.name}
            />
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CategoryPage;
