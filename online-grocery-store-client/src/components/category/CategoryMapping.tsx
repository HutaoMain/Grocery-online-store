// import Category from "./Category";
// import Carousel from "react-multi-carousel";

// import softdrinksImg from "../../assets/softdrinks.jpg";
// import snacksImg from "../../assets/snacks.png";
// import fruitsImg from "../../assets/fruits.jpg";
// import vegetablesImg from "../../assets/vegetables.jpg";

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const CategoryMapping = () => {
//   const categories = [
//     { name: "Soft Drinks", image: softdrinksImg },
//     { name: "Snacks", image: snacksImg },
//     { name: "Fruits", image: fruitsImg },
//     { name: "Vegetables", image: vegetablesImg },
//   ];

//   const categorysample = categories.map((item) => {
//     <Category name={item.name} image={item.image} />;
//   });

//   return (
//     <Carousel responsive={responsive} showDots={true}>
//       {categories.map((item) => {
//         <Category name={item.name} image={item.image} />;
//       })}
//     </Carousel>
//   );
// };

// export default CategoryMapping;
