import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import ProfileMenu from "./components/profile-dropdown/ProfileMenu";
import Topbar from "./components/topbar/Topbar";
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <ProfileMenu />
      <section className="app-container">
        <Home />
      </section>
      <Navbar />
    </div>
  );
}

export default App;
