import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import ProfileMenu from "./components/profile-dropdown/ProfileMenu";
import Topbar from "./components/topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/categorypage/CategoryPage";
import Footer from "./components/footer/Footer";
import ProductPage from "./pages/productpage/ProductPage";

function App() {
  return (
    <div className="App">
      <Topbar />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
