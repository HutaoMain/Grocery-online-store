import "./FavoritePage.css";
import { ProductInterface } from "../../types/Types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthStore from "../../zustand/AuthStore";
import ProductCard from "../../components/productCard/ProductCard";
import { useEffect, useState } from "react";

const FavoritePage = () => {
  const user = useAuthStore((state) => state.user);

  const [favorite, setFavorite] = useState<ProductInterface[]>();

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

  useEffect(() => {
    setFavorite(data);
  }, [data]);

  console.log(favorite);

  return (
    <div className="favoritepage">
      <div className="favoritepage-container">
        {favorite === undefined || favorite?.length === 0 ? (
          <p className="favoritepage-nofavorite-text">No favorite products.</p>
        ) : (
          favorite?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
