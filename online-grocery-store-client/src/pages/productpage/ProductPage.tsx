import CategorySideBar from "../../components/categorySidebar/CategorySideBar";
import "./ProductPage.css";
import ProductList from "../../components/productList/ProductList";

const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="productpage-container">
        <section className="productpage-category">
          <CategorySideBar />
        </section>
        <section className="productpage-list">
          <ProductList />
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
