import "./Category.css";
import { CategoryInterface } from "../../types/Types";
import React from "react";

interface Props {
  category: CategoryInterface;
}

const Category: React.FC<Props> = ({ category }) => {
  return (
    <div className="category">
      <div className="categories">
        <div className="category-container">
          <img
            className="category-image"
            src={category?.imageUrl}
            alt={category?.categoryName}
          />
          <div className="category-name">{category?.categoryName}</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
