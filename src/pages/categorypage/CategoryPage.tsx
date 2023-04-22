import Search from "../../components/search/Search";
import "./CategoryPage.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Category from "../../components/category/Category";
import { CategoryInterface } from "../../types/Types";

const CategoryPage = () => {
  const { data } = useQuery<CategoryInterface[]>({
    queryKey: ["category"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_APP_API_URL}/api/category/list`)
        .then((res) => res.data),
  });

  const [filteredCategories, setFilteredCategories] = useState<
    CategoryInterface[]
  >(data || []);

  const handleSearch = (searchTerm: string) => {
    if (data) {
      const filtered = data.filter((category) =>
        category.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  };

  return (
    <div className="category-page">
      <Search handleSearch={handleSearch} />
      <section className="category-list-container">
        {filteredCategories?.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </section>
    </div>
  );
};

export default CategoryPage;
