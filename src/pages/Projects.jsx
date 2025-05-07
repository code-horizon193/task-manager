import React, { useEffect, useState } from 'react';
import { projects, tasksList } from '../data';
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
import { FiMoreHorizontal } from "react-icons/fi";
import ProjectCard from '../components/ProjectCard';
import TaskCard from '../components/TaskCard';

const Projects = () => {
  const { searchBar, setsearchBar } = useAppContext();
  const [openPage, setopenPage] = useState("projects");
  const projectsTeam = funcs.getAllTeam(projects);

  // Get 5 Random Members from the main array
  const ranImg = funcs.randomImgs(4, projectsTeam);

  const openProjects = () => {
    setopenPage("projects")
  };
  const openTasks = () => {
    setopenPage("tasks")
  };
  // ======================================
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
    <div className='page relative'>
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
        <div className="mt-3 border-b pb-2 border-b-slate-300 dark:border-b-slate-700">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button
                onClick={openProjects}
                className={`px-4 py-1 border border-transparent transition-all duration-200 font-medium cursor-pointer text-slate-500 ${openPage === "projects" ? "bg-orange-500 text-white rounded-md border-orange-500 hover:text-orange-600 hover:bg-transparent hover:border-orange-500" : ""}`}
              >
                Projects
              </button>
              <button
                onClick={openTasks}
                className={`px-4 py-1 border border-transparent transition-all duration-200 font-medium cursor-pointer text-slate-500 ${openPage === "tasks" ? "bg-orange-500 text-white rounded-md border-orange-500 hover:text-orange-600 hover:bg-transparent hover:border-orange-500" : ""}`}
              >
                Tasks
              </button>
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

            <div className="flex items-center space-x-2 relative">
              <button
                className='hidden sm:flex items-center gap-1.5 px-4 py-1 border transition-all duration-200 border-transparent hover:border-slate-300 dark:hover:border-slate-700 rounded-sm text-slate-500'
              >
                <IoFilterOutline />
                <span>Filter</span>
              </button>
              <button
                className='hidden sm:flex items-center gap-0.5 px-2 py-1 border rounded-full text-slate-500 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300'
                onClick={openSearchBar}
                title='Ctrl+i to close'
              >
                <IoSearchOutline />
                <span className='text-xs'>Ctrl+b</span>
              </button>
              <button
                className='hidden sm:flex items-center gap-1.5 px-4 py-1 border transition-all duration-200 border-transparent hover:border-slate-300 dark:hover:border-slate-700 rounded-sm text-slate-500'
              >
                <FaSortAmountDown />
                <span>Sort</span>
              </button>
            </div>
          </div>
        </div>

        {searchBar ? (
          <SearchBar />
        ) : ("")}

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-start">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/40 border rounded-md border-blue-200 dark:border-blue-900">
            <div className="flex items-center justify-between px-3 py-1 bg-blue-400/30 dark:bg-blue-200 rounded-md">
              <p className="text-blue-800 font-semibold font-ubuntu relative px-3 before:absolute before:size-2 before:rounded-full before:bg-blue-700 before:left-0 before:top-1/2 before:-translate-y-1/2">
                High
              </p>
              <div className="text-blue-700 text-sm font-medium">
                {openPage === "projects" ? funcs.highPriority(projects).length : funcs.highPriority(tasksList).length}
              </div>
            </div>
            <div className="mt-3 space-y-3">
              {openPage === "projects" ?
                (funcs.highPriority(projects).map((i) =>
                  <ProjectCard
                    key={i.title}
                    item={i}
                  />
                )) : (
                  funcs.highPriority(tasksList).map((i) =>
                    <TaskCard
                      key={i.title}
                      task={i}
                    />
                  )
                )
              }
            </div>
          </div>
          <div className="p-3 bg-green-50 dark:bg-green-900/40 border rounded-md border-green-200 dark:border-green-900">
            <div className="flex items-center justify-between px-3 py-1 bg-green-400/30 dark:bg-green-200 rounded-md">
              <p className="text-green-800 font-semibold font-ubuntu relative px-3 before:absolute before:size-2 before:rounded-full before:bg-green-700 before:left-0 before:top-1/2 before:-translate-y-1/2">
                Medium
              </p>
              <div className="text-green-700 text-sm font-medium">
                {openPage === "projects" ? funcs.medPriority(projects).length : funcs.medPriority(tasksList).length}
              </div>
            </div>
            <div className="mt-3 space-y-3">
              {openPage === "projects" ?
                (funcs.medPriority(projects).map((i) =>
                  <ProjectCard
                    key={i.title}
                    item={i}
                  />
                )) : (
                  funcs.medPriority(tasksList).map((i) =>
                    <TaskCard
                      key={i.title}
                      task={i}
                    />
                  )
                )
              }
            </div>
          </div>
          <div className="p-3 bg-red-50 dark:bg-red-900/40 border rounded-md border-red-200 dark:border-red-900">
            <div className="flex items-center justify-between px-3 py-1 bg-red-400/30 dark:bg-red-200 rounded-md">
              <p className="text-red-800 font-semibold font-ubuntu relative px-3 before:absolute before:size-2 before:rounded-full before:bg-red-700 before:left-0 before:top-1/2 before:-translate-y-1/2">
                Low
              </p>
              <div className="text-red-700 text-sm font-medium">
                {openPage === "projects" ? funcs.lowPriority(projects).length : funcs.lowPriority(tasksList).length}
              </div>
            </div>
            <div className="mt-3 space-y-3">
              {openPage === "projects" ?
                (funcs.lowPriority(projects).map((i) =>
                  <ProjectCard
                    key={i.title}
                    item={i}
                  />
                )) : (
                  funcs.lowPriority(tasksList).map((i) =>
                    <TaskCard
                      key={i.title}
                      task={i}
                      settask
                    />
                  )
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;