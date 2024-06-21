import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ showSideBar, toggleSidebar }) => {
  return (
    <div
      id="drawer-navigation"
      className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
        showSideBar ? "" : "-translate-x-full"
      } bg-white dark:bg-gray-800`}
      tabIndex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
        Menu
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={toggleSidebar}
      >
        <svg
          aria-hidden="false"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        {/* Sidebar content */}
        <ul className="space-y-2 font-medium">
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </nav>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
