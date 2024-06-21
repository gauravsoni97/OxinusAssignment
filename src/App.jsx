import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Favourite from "./pages/Favourite";
import Menu from "./pages/Menu";
import RandomMeal from "./pages/RandomMeal";

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <Router>
      <div className="text-center">
        <svg
          onClick={toggleSidebar}
          viewBox="0 0 1024 1024"
          fill="white"
          height="1em"
          width="1em"
        >
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
        </svg>
      </div>

      <Sidebar showSideBar={showSideBar} toggleSidebar={toggleSidebar} />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/randommeal" element={<RandomMeal />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
