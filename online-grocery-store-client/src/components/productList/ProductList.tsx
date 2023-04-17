import { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import Search from "../search/Search";

interface productInterface {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const arrayOfObjects: productInterface[] = [
  {
    image:
      "https://d2t3trus7wwxyy.cloudfront.net/catalog/product/p/r/pringles-original-107g_2.jpg",
    name: "Pringles",
    price: 20,
    quantity: 30,
  },
  {
    image:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702535921/26ca2bc40af330102e756dfeb42b8298_large.png&width=512&type=webp&quality=90",
    name: "Nova",
    price: 15,
    quantity: 40,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0705/9226/6549/products/IMG_14022022_084424__8_x_8_inch_1200x1200.jpg?v=1676782767",
    name: "Piatos",
    price: 15,
    quantity: 40,
  },
  {
    image:
      "https://www.selectaphilippines.com/content/dam/unilever/heart/philippines/pack_shot/frootie_strawberry_packshot-31957509-png.png",
    name: "Strawberry ",
    price: 25,
    quantity: 10,
  },
];

const ProductList = () => {
  const [filteredCategoriesProducts, setFilteredProducts] =
    useState<productInterface[]>(arrayOfObjects);

  const handleSearch = (searchTerm: string) => {
    const filtered = arrayOfObjects.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "50px",
      }}
    >
      <Search handleSearch={handleSearch} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "30px",
          justifyContent: "center",
          alignContent: "center",
          width: "900px",
        }}
      >
        {filteredCategoriesProducts.map((product) => (
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
