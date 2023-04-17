import ProductCard from "../productCard/ProductCard";

const ProductMapping = () => {
  const arrayOfObjects = [
    {
      id: 1,
      image:
        "https://d2t3trus7wwxyy.cloudfront.net/catalog/product/p/r/pringles-original-107g_2.jpg",
      name: "Pringles",
      price: 20,
      quantity: 30,
    },
    {
      id: 2,
      image:
        "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702535921/26ca2bc40af330102e756dfeb42b8298_large.png&width=512&type=webp&quality=90",
      name: "Nova",
      price: 15,
      quantity: 40,
    },
    {
      id: 3,
      image:
        "https://cdn.shopify.com/s/files/1/0705/9226/6549/products/IMG_14022022_084424__8_x_8_inch_1200x1200.jpg?v=1676782767",
      name: "Piatos",
      price: 15,
      quantity: 40,
    },
    {
      id: 5,
      image:
        "https://www.selectaphilippines.com/content/dam/unilever/heart/philippines/pack_shot/frootie_strawberry_packshot-31957509-png.png",
      name: "Strawberry ",
      price: 25,
      quantity: 10,
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "50px",
      }}
    >
      <h1 style={{ textAlign: "start", marginBottom: "50px" }}>
        Best Selling Products
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "50px",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          maxWidth: "1240px",
        }}
      >
        {arrayOfObjects.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductMapping;
