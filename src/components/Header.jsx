import React, { useState } from 'react';
import { useAppContext } from '../context/contextAPI';
import { BiBell, BiMoon, BiSearch, BiSun } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { FiMenu } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const { sideBar, setsideBar, theme, settheme } = useAppContext();
    const [isOpen, setisOpen] = useState(false);

    const toggleMenu = () => {
        setisOpen((prev) => !prev)
    }

    const toggleMood = () => {
        theme === "light" ? settheme("dark") : settheme("light");
        if(isOpen){
            toggleMenu();
        }
    }

    const toggleSidebar = () => {
        setsideBar((prev) => !prev)
    }
    return (
        <header className={`h-15 bg-white dark:bg-darkmode w-full border-b border-b-slate-200 dark:border-b-gray-800 transition-all duration-300`}>
            <div className="size-full p-4 flex items-center justify-between">
                <div className="flex items-center md:w-1/2 w-[70%]">
                    <div className="flex items-center gap-1 w-full md:w-sm border border-slate-300 rounded-lg dark:border-slate-700">
                        <div className='text-lg text-gray-700 dark:text-slate-300 grid place-items-center size-9'>
                            <BiSearch />
                        </div>
                        <input type="text" placeholder='Search' className='w-full border border-none outline-none text-sm text-gray-700 dark:text-slate-200' />
                    </div>

                    <button className='text-xl ml-1 size-9 cursor-pointer transition duration-200 hidden lg:hidden md:grid place-items-center border border-slate-300 dark:border-gray-800 rounded-sm hover:bg-slate-50 dark:hover:bg-slate-900 active:opacity-85'
                        onClick={toggleSidebar}
                    >
                        {sideBar ? <FiMenu /> : <RiMenu3Fill />}
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <div title='notification' className="size-9 text-xl grid place-items-center bg-slate-100 rounded-full dark:bg-gray-800 dark:text-white text-gray-800 cursor-pointer">
                        <BiBell />
                    </div>
                    <div title='Email' className="size-9 text-xl grid place-items-center bg-slate-100 rounded-full dark:bg-gray-800 dark:text-white text-gray-800 cursor-pointer">
                        <MdOutlineEmail />
                    </div>
                    <div className="size-9 text-xl grid place-items-center group bg-slate-100 rounded-full dark:bg-gray-800 dark:text-white text-gray-800 cursor-pointer relative"
                        onClick={toggleMood}
                    >
                        {theme === "light" ? <BiMoon /> : <BiSun />}

                        <span className='absolute top-15 right-1/2 text-sm p-2 rounded-sm text-white select-none pointer-events-none bg-black whitespace-nowrap dark:bg-slate-300 dark:text-slate-900 font-semibold group-hover:top-13 transition-all duration-300 opacity-0 group-hover:opacity-100 capitalize font-ubuntu z-50'>{theme} mood</span>
                    </div>
                    <Link to='/settings' className='size-9 select-none' title='profile'>
                        <img src={`${import.meta.env.BASE_URL}public/users/user-13.jpg`} alt="profile" className='size-full object-cover rounded-full object-center' />
                    </Link>
                </div>

                <div className="md:hidden relative flex items-center gap-1">

                    <button 
                      className='text-xl size-9 grid place-items-center rounded-sm active:bg-slate-100 dark:active:bg-slate-800'
                       onClick={toggleMenu}
                      >
                        {isOpen ? <AiOutlineClose /> : <CiMenuKebab />}
                    </button>

                    <div className={`w-44 rounded-sm absolute ${isOpen ? "" : "hidden"} top-12 p-1 bg-slate-50 border-slate-300 dark:border-slate-600 border dark:bg-darkmode right-4 transition duration-200 z-40`}>

                        <button className="flex w-full items-center gap-2 capitalize p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-900"
                            onClick={toggleMenu}
                        >
                            <BiBell />
                            <span>notification</span>
                        </button>

                        <button className="flex w-full items-center gap-2 capitalize p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-900"
                            onClick={toggleMenu}
                        >
                            <MdOutlineEmail />
                            <span>message</span>
                        </button>

                        <button className='flex w-full items-center gap-2 capitalize p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-900'
                            onClick={toggleMood}
                        >
                            {theme === "light" ? <BiMoon /> : <BiSun />}
                            <span className="">
                                {theme === "dark" ? "light" : "dark"} mood
                            </span>
                        </button>

                    </div>

                    <button className='text-xl ml-1 size-9 cursor-pointer transition duration-200 lg:hidden grid place-items-center border border-slate-300 dark:border-gray-800 rounded-sm hover:bg-slate-50 dark:hover:bg-slate-900 active:opacity-85'
                        onClick={toggleSidebar}
                    >
                        {sideBar ? <FiMenu /> : <RiMenu3Fill />}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;