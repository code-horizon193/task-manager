import React, { useEffect, useState } from 'react';
import { projects } from '../data';
import { funcs } from '../utils/funcs';
import { FaUserPlus } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";
import SearchBar from '../components/SearchBar';
import { useAppContext } from '../context/contextAPI';

const Projects = () => {
  const [openPage, setopenPage] = useState("projects");
  const projectsTeam = funcs.getAllTeam(projects);

  // Get 5 Random Members from the main array
  const ranImg = funcs.randomImgs(4, projectsTeam);

  const toggleProject = () => {
    setopenPage("projects");
  };
  const toggleTask = () => {
    setopenPage("tasks");
  };
  const tabs = ["Projects", "Tasks"];

  const { searchBar, setsearchBar } = useAppContext();

  const openSearchBar = () => {
    setsearchBar(true);
  };

  const closeSearchBar = () => {
    setsearchBar(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "b") {
        e.preventDefault();
        openSearchBar();
      }
    };
    const handleKeyUp = (e) => {
      if (e.ctrlKey && e.key === "i") {
        e.preventDefault();
        closeSearchBar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    }
  }, []);

  return (
    <div className='page'>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="text-start">
            <h4 className="text-xl font-semibold font-ubuntu text-slate-600 dark:text-slate-300 uppercase">
              {openPage}
            </h4>
            <span className="text-sm -mt-0.5 block text-slate-500">
              All {openPage} will appear here
            </span>
          </div>

          <div className="flex items-center space-x-2.5">
            <div className="flex items-center">
              {ranImg.map((i) => (
                <div
                  key={i}
                  className="not-first:-ml-3 size-9 p-0.5 rounded-full bg-gradient-to-br from-red-500 to-orange-500">
                  <img
                    src={projectsTeam[i]}
                    className='size-full rounded-full  border-orange-500 object-cover'
                    alt='team-member' />
                </div>
              ))}
              {projectsTeam.length > 4 ? (
                <span className="size-9 grid place-items-center bg-orange-600 text-sm rounded-full -ml-3  text-white">
                  +{projectsTeam.length - 4}
                </span>
              ) : ("")
              }
            </div>
            <button
              className='hidden sm:flex items-center gap-1.5 px-4.5 py-1 rounded-sm bg-orange-500 text-white hover:bg-orange-700 cursor-pointer text-base whitespace-nowrap transition-all duration-200'
            >
              <FaUserPlus />
              <span>Invite</span>
            </button>
            <button
              className='hidden sm:flex items-center gap-1.5 px-3.5 py-1 rounded-sm border border-slate-500 text-slate-500 dark:text-slate-200 transition-all duration-200 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800'
            >
              <IoShareSocialSharp />
              <span>Share</span>
            </button>
          </div>
        </div>
        <div className="mt-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-1">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setopenPage(tab)}
                  className={`px-4 py-1 border border-transparent transition-all duration-200 font-medium cursor-pointer text-slate-500 ${openPage === tab ? "bg-orange-500 text-white rounded-md border-orange-500 hover:text-orange-600 hover:bg-transparent hover:border-orange-500" : ""}`}
                >
                  {tab}
                </button>
              ))}
              <button
                className='flex items-center gap-1.5 px-4 py-1 border transition-all duration-200 border-transparent hover:border-slate-300 dark:hover:border-slate-700 rounded-sm text-slate-500'
              >
                <FaListUl />
                <span>List</span>
              </button>
              <button
                className='flex items-center gap-1.5 px-4 py-1 border transition-all duration-200 border-transparent hover:border-slate-300 dark:hover:border-slate-700 rounded-sm text-slate-500'
              >
                <BsGrid1X2Fill />
                <span>Grid</span>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                className='flex items-center gap-1.5 px-4 py-1 border transition-all duration-200 border-transparent hover:border-slate-300 dark:hover:border-slate-700 rounded-sm text-slate-500'
              >
                <IoFilterOutline />
                <span>Filter</span>
              </button>
              <button
                className='flex items-center gap-0.5 px-2 py-1 border rounded-full text-slate-500 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300'
                onClick={openSearchBar}
              >
                <IoSearchOutline />
                <span className='text-xs'>Ctrl+K</span>
              </button>
              <button
                className='flex items-center gap-1.5 px-4 py-1 border transition-all duration-200 border-transparent hover:border-slate-300 dark:hover:border-slate-700 rounded-sm text-slate-500'
              >
                <FaSortAmountDown />
                <span>Sort</span>
              </button>
            </div>
          </div>
        </div>

          {searchBar ? (
            <SearchBar />
          ): ("")}
      </div>
    </div>
  )
}

export default Projects;