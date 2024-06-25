import React, { useEffect, useState } from "react";

const RandomMealGenerator = ({ favorites, setFavorites }) => {
  const [randomMeal, setRandomMeal] = useState(null);

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRandomMeal(data.meals[0]);
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
  };

  const toggleFavorite = () => {
    if (!randomMeal) return;

    const index = favorites.findIndex(
      (meal) => meal.idMeal === randomMeal.idMeal
    );
    if (index === -1) {
      const updatedFavorites = [...favorites, randomMeal];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = favorites.filter(
        (meal) => meal.idMeal !== randomMeal.idMeal
      );
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);
  return (
    <div className="max-w-screen-lg mx-auto mt-12 p-6">
      <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-300 mb-6">
        Random Meal Generator
      </h1>

      {randomMeal && (
        <div class="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700 relative">
          <button
            className={`w-8 h-8 absolute bottom-[1.5rem] right-[1rem] rounded-full text-gray-500 hover:text-red-500 focus:outline-none transition-colors duration-300 ${
              favorites &&
              favorites.some((favMeal) => favMeal.idMeal === randomMeal.idMeal)
                ? "text-red-500"
                : ""
            }`}
            onClick={toggleFavorite}
          >
            {favorites &&
            favorites.some(
              (favMeal) => favMeal.idMeal === randomMeal.idMeal
            ) ? (
              <svg viewBox="0 0 1024 1024" fill="red" height="1em" width="1em">
                <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
              </svg>
            ) : (
              <svg viewBox="0 0 1024 1024" fill="gray" height="1em" width="1em">
                <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
              </svg>
            )}
          </button>

          <img
            class="rounded-t-lg"
            src={randomMeal.strMealThumb}
            alt={randomMeal.strMeal}
          />

          <div class="p-5">
            <p class="mb-3 font-normal text-gray-700 text-gray-400">
              {randomMeal.strMeal}
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center mt-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          onClick={fetchRandomMeal}
        >
          Generate Random Meal
        </button>
      </div>
    </div>
  );
};

export default RandomMealGenerator;
