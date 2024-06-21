// Favorite.jsx

import React from "react";

const Favorite = () => {

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="max-w-screen-xl mx-auto mt-12 p-6">
      <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-300">
        Favorite Meals
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {favorites.map((meal) => (
          <li
            key={meal.idMeal}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
