import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import ProfileMenu from "./components/profile-dropdown/ProfileMenu";
import Topbar from "./components/topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/categorypage/CategoryPage";

function App() {
  return (
    <div className="App">
      <Topbar />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
