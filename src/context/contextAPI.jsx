import React, { useState, createContext, useContext, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sideBar, setsideBar] = useState(true);
  const [theme, settheme] = useState(localStorage.getItem("theme") || "light");

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
    <StateContext.Provider value={{ sideBar, setsideBar, theme, settheme }}>
      {children}
    </StateContext.Provider>
  );
};


export const useAppContext = () => useContext(StateContext);
