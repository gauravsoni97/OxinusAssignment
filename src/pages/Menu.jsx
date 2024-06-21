import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto mt-12">
      <center>
        <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Categories
          </span>
        </h1>
      </center>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {categories.map((category) => (
          <Link to={`/menu/${category.strCategory}`}>
            <li
              key={category.idCategory}
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
            >
              {category.strCategory}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
