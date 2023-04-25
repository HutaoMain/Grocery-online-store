import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/categorypage/CategoryPage";
import Footer from "./components/footer/Footer";
import ProductPage from "./pages/productpage/ProductPage";
import CheckoutPage from "./pages/checkoutpage/CheckoutPage";
import ProfilePage from "./pages/profilepage/ProfilePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useAuthStore from "./zustand/AuthStore";
import { useEffect } from "react";
import FavoritePage from "./pages/favoritePage/FavoritePage";

const queryClient = new QueryClient();

function App() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const params = new URLSearchParams(window.location.search);
  const email = params.get("email");

  useEffect(() => {
    if (email) {
      setUser(email);
    }

    console.log(email);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Topbar />
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
