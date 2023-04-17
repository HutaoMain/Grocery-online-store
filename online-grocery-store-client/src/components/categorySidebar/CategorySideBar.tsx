import "./CategorySideBar.css"
import softdrinksImg from "../../assets/softdrinks.jpg";
import snacksImg from "../../assets/snacks.png";
import fruitsImg from "../../assets/fruits.jpg";
import vegetablesImg from "../../assets/vegetables.jpg";

interface Category {
    name: string;
    image: string;
  }
  
  const categories: Category[] = [
    { name: "Soft Drinks", image: softdrinksImg },
    { name: "Snacks", image: snacksImg },
    { name: "Fruits", image: fruitsImg },
    { name: "Vegetables", image: vegetablesImg },
    { name: "Meat", image: "https://picsum.photos/200/300" },
    { name: "Dairy", image: "https://picsum.photos/200/300" },
    { name: "Frozen Foods", image: "https://picsum.photos/200/300" },
    { name: "Canned Foods", image: "https://picsum.photos/200/300" },
    { name: "Meat", image: "https://picsum.photos/200/300" },
    { name: "Dairy", image: "https://picsum.photos/200/300" },
    { name: "Frozen Foods", image: "https://picsum.photos/200/300" },
    { name: "Canned Foods", image: "https://picsum.photos/200/300" },
  ];
  
const CategorySideBar = () => {
  return (
    <div className="category-sidebar">
        <h1 style={{marginTop: "20px", marginBottom: "0"}}>Categories</h1>
        <div className="categorysidebar-division"></div>
        {categories.map((item)=>
        <div className="categoryside-container">
            <img className="categoryside-image" src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <span className="categoryside-prodno">1</span>
        </div>
        )}
        <div className="categorysidebar-spacer"></div>
    </div>
  )
}

export default CategorySideBar