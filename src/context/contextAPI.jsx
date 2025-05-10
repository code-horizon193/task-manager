import React, { useState, createContext, useContext, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sideBar, setsideBar] = useState(true);
  const [theme, settheme] = useState(localStorage.getItem("theme") || "light");
  const [searchBar, setsearchBar] = useState(false);
  const [isGrid, setisGrid] = useState(true);
  const [currentColor, setcurrentColor] = useState(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark"){
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
    };

    localStorage.setItem("theme", theme);
  }, [theme])

  return (
    <StateContext.Provider value={{ sideBar, setsideBar, theme, settheme ,searchBar ,setsearchBar ,isGrid ,setisGrid ,currentColor ,setcurrentColor}}>
      {children}
    </StateContext.Provider>
  );
};


export const useAppContext = () => useContext(StateContext);
