import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mt-36">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 text-white md:text-5xl lg:text-6xl text-center">
          Eat, Share, Enjoy:{" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
            OxinusMeals!
          </span>
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl text-gray-400 text-center">
          Dive into a world of flavors with OxinusMeals! From comforting
          classics to bold new creations, our recipes are crafted to inspire and
          satisfy. Join our community of food lovers and discover the joy of
          cooking at home.
        </p>
      </div>

      <div className="text-center mx-auto mt-24">
        <Link to="/menu">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 focus:ring-blue-800 font-medium rounded-lg text-sm px-16 py-8 text-center me-6 mb-2"
          >
            Explore Menu
          </button>
        </Link>
        <Link to="/favourite">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 focus:ring-cyan-800 font-medium rounded-lg text-sm px-16 py-8 text-center me-6 mb-2"
          >
            Favourite Meals
          </button>
        </Link>
        <Link to="/randommeal">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 focus:ring-green-800 font-medium rounded-lg text-sm px-16 py-8 text-center me-6 mb-2"
          >
            Random Meals
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
