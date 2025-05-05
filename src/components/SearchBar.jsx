import { useRef, useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useAppContext } from "../context/contextAPI";
import { projects } from "../data";

const SearchBar = () => {
  const containerRef = useRef(null);
  const { setsearchBar } = useAppContext();
  const [isSearched, setisSearched] = useState(false);
  const [searchVal, setsearchVal] = useState("");
  const [newArr, setnewArr] = useState([]);

  const handleSearch = (e) => {
    setisSearched(true);
    setsearchVal(e.target.value);
    if (e.target.value.length === 0) {
      setisSearched(false);
    };
    let newItem = projects.filter((item) =>
      item.title.toLocaleLowerCase().startsWith(e.target.value)
    );
    setnewArr(newItem);
  }

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
              onChange={handleSearch}
              autoFocus
              type="text"
              placeholder='search for projects,tasks ...'
              className='w-full border-none outline-none'
            />
          </div>
          {isSearched ? (
            <div className="w-full px-1 py-3 max-h-96 h-full overflow-auto blockoverflow grid gap-3">
              {newArr.map((item) => (
                <div className="flex items-center justify-between gap-3 p-3 border rounded-md cursor-pointer border-slate-300 dark:border-slate-700">
                  <div className="grid gap-1">
                    <p className="text-xs text-slate-500">Title</p>
                    <p className="text-[14px] font-semibold text-slate-600 dark:text-slate-200">
                      {item.title}
                    </p>
                  </div>

                  <div className="grid gap-1">
                    <p className="text-xs text-indigo-500">
                      {item.startDate}
                    </p>
                    <p className="text-xs text-red-500">
                      {item.endDate}
                    </p>
                  </div>

                  <div className="hidden sm:grid gap-1">
                    <p className="text-sm pr-3 py-0.5 rounded-full  w-fit text-green-500">
                      {item.priority}
                    </p>
                    <p className="text-sm text-amber-500">
                      {item.statues}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <p className="text-center mt-3 text-sm text-slate-500">
              type to search for any projects or tasks {searchVal}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchBar;