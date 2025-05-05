import { useRef, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useAppContext } from "../context/contextAPI";

const SearchBar = () => {
  const containerRef = useRef(null);
  const { searchBar, setsearchBar } = useAppContext();
  useEffect(() => {
    const handleOutClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setsearchBar(false);
      }
    };

    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick)
    }
  }, []);

  return (
    <div className='w-screen h-dvh fixed top-0 left-0 backdrop-blur-[3px] transition-all duration-300'
      style={{ zIndex: "99999" }}
    >
      <div className="flex items-center justify-center size-full">
        <div 
          ref={containerRef}
          className="max-w-xs sm:max-w-2xl w-full bg-slate-50 shadow-xl hover:shadow-md dark:bg-slate-900 px-7 py-16 rounded-md transition-all duration-200">
          <div className="flex items-center gap-2 border border-slate-300 dark:border-slate-600 px-3 rounded-md py-1.5">
            <IoSearchOutline />
            <input
              type="text"
              placeholder='search for projects,tasks ...'
              className='w-full border-none outline-none'
            />
          </div>
          <p className="text-center mt-3 text-sm text-slate-500">
            type to search for any projects or tasks {searchBar ? "okay" : "not okay"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;