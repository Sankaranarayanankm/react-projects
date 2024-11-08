import React from "react";
import "./LightDarkMode.css";
import useLocalStorage from "./hooks/useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const toggleThemeHandler = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`lightDarkMode ${theme}`}>
      <h1>Hello World!</h1>
      <button onClick={toggleThemeHandler}>Change Theme</button>
    </div>
  );
};

export default LightDarkMode;
