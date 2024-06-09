"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const BackgroundToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-20 py-4 flex items-center bg-[--light] cursor-pointer rounded-full p-2.5 shadow-md dark:bg-zinc-800"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-primary-blue" size={18} />
      <div
        className="absolute bg-[--light] w-11 h-11 rounded-full border-2 shadow-lg transition-transform duration-300 dark:bg-zinc-700 dark:border-zinc-700"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <BsSunFill className="ml-auto text-yellow-400" size={18} />
    </div>
  );
};

export default BackgroundToggle;
