import "./FavoritePage.css";
import { ProductInterface } from "../../types/Types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthStore from "../../zustand/AuthStore";
import ProductCard from "../../components/productCard/ProductCard";

const FavoritePage = () => {
  const user = useAuthStore((state) => state.user);

  const { data } = useQuery<ProductInterface[]>({
    queryKey: ["favoriteByEmail"],
    queryFn: () =>
      axios
        .get(
          `${
            import.meta.env.VITE_APP_API_URL
          }/api/product/favoriteByEmail/${user}`
        )
        .then((res) => res.data),
  });

  console.log("favorite page", data);

  return (
    <div className="favoritepage">
      <div className="favoritepage-container">
        {data?.length === 0 ? (
          <p className="favoritepage-nofavorite-text">No favorite products.</p>
        ) : (
          data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
