import CategorySideBar from "../../components/categorySidebar/CategorySideBar";
import "./ProductPage.css";
import { ProductInterface } from "../../types/Types";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../../components/productCard/ProductCard";
import Search from "../../components/search/Search";

const ProductPage = () => {
  const { data, isLoading } = useQuery<ProductInterface[]>({
    queryKey: ["productList"],
    queryFn: async () =>
      await axios
        .get(`${import.meta.env.VITE_APP_API_URL}/api/product/list`)
        .then((res) => res.data),
  });

  const [filteredCategoriesProducts, setFilteredProducts] = useState<
    ProductInterface[]
  >([]);

  useEffect(() => {
    if (data) {
      setFilteredProducts(data);
    }
  }, [data]);

  const handleSearch = (searchTerm: string) => {
    if (data) {
      const filtered = data.filter((product) =>
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
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            {filteredCategoriesProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        )}

        {/* </section> */}
      </div>
    </div>
  );
};

export default ProductPage;
