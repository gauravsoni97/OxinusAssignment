import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);

  useEffect(() => {
    const fetchMealsByCategory = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error(
          `Error fetching meals for category ${categoryName}:`,
          error
        );
      }
    };

    fetchMealsByCategory();
  }, [categoryName]);

  // Function to toggle favorite status of a meal
  const toggleFavorite = (mealId) => {
    const index = favorites.findIndex((meal) => meal.idMeal === mealId);
    if (index === -1) {
      // Meal is not favorited, add it to favorites
      const mealToAdd = meals.find((meal) => meal.idMeal === mealId);
      setFavorites([...favorites, mealToAdd]);
    } else {
      // Meal is already favorited, remove it from favorites
      const updatedFavorites = favorites.filter(
        (meal) => meal.idMeal !== mealId
      );
      setFavorites(updatedFavorites);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-12 p-6">
      <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-300">
        Meals in {categoryName}
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative"
          >
            <button
              className={`w-8 h-8  absolute top-0 right-0 rounded-full text-gray-500 hover:text-red-500 focus:outline-none transition-colors duration-300 ${
                favorites.some((favMeal) => favMeal.idMeal === meal.idMeal)
                  ? "text-red-500"
                  : ""
              }`}
              onClick={() => toggleFavorite(meal.idMeal)}
            >
              {favorites.some((favMeal) => favMeal.idMeal === meal.idMeal) ? (
                <svg
                  viewBox="0 0 1024 1024"
                  fill="red"
                  height="1em"
                  width="1em"
                >
                  <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 1024 1024"
                  fill="gray"
                  height="1em"
                  width="1em"
                >
                  <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                </svg>
              )}
            </button>

            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <div className="flex flex-col justify-between p-4 leading-normal ">
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

export default CategoryPage;
