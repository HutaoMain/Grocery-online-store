import CategorySideBar from "../../components/categorySidebar/CategorySideBar";
import "./ProductPage.css";
import { ProductInterface } from "../../types/Types";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../../components/productCard/ProductCard";
import Search from "../../components/search/Search";

const ProductPage = () => {
  const { data } = useQuery<ProductInterface[]>({
    queryKey: ["product"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_APP_API_URL}/api/product/list`)
        .then((res) => res.data),
  });

  const [filteredCategoriesProducts, setFilteredProducts] = useState<
    ProductInterface[]
  >(data || []);

  const handleSearch = async (searchTerm: string) => {
    if (data) {
      const filtered = await data.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  console.log(filteredCategoriesProducts);

  return (
    <div className="product-page">
      <Search handleSearch={handleSearch} />
      <div className="productpage-container">
        {/* <section className="productpage-category">
          <CategorySideBar />
        </section> */}
        {/* <section className="productpage-list"> */}
        {filteredCategoriesProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {/* </section> */}
      </div>
    </div>
  );
};

export default ProductPage;
