// Favorite.jsx

import React from "react";

const Favorite = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="max-w-screen-lg mx-auto mt-12 p-6">
      <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-300">
        Favorite Meals
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {favorites.map((meal) => (
          <li
            key={meal.idMeal}
            class="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
          >
            <img
              class="rounded-t-lg"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />

            <div class="p-5">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {meal.strMeal}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
