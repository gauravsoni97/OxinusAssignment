import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Favourite from "./pages/Favourite";
import Menu from "./pages/Menu";
import RandomMeal from "./pages/RandomMeal";
import Navbar from "./components/Navbar/Navbar";
import CategoryPage from "./pages/CategoryPage";

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
    const [favorites, setFavorites] = useState([]);


  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />

      <Sidebar showSideBar={showSideBar} toggleSidebar={toggleSidebar} />
      <div >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:categoryName" element={<CategoryPage favorites={favorites}  setFavorites={setFavorites} />} />
          <Route path="/randommeal" element={<RandomMeal />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
