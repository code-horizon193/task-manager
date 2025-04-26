import React from 'react';
import { links } from '../data';
import { Link, NavLink } from 'react-router-dom';
import { MdAddTask } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { useAppContext } from '../context/contextAPI';

const SideBar = () => {
    const activeLink = "bg-purple-500 text-white flex items-center rounded-sm font-ubuntu font-medium capitalize transition-all duration-200";

    const normalLink = "text-gray-700 flex items-center rounded-sm font-ubuntu font-medium capitalize hover:bg-slate-100 text-slate-500 transition-all duration-200 dark:text-gray-200 dark:hover:bg-slate-900";

    const { sideBar, setsideBar } = useAppContext();
    const closeBar = () => {
        setsideBar((prev) => !prev);
    };

    return (
        <div className={`fixed ${sideBar ? "lg:left-0 -left-full" : "lg:-left-full left-0"} top-0 w-60 h-dvh shadow-lg dark:shadow-slate-300/35 transition duration-200 bg-white dark:bg-darkmode z-50`}
        >
            <div className="size-full relative transition duration-200 flex flex-col justify-between">
                <button className='text-red-500 text-3xl absolute -right-4 top-10 cursor-pointer lg:hidden' onClick={closeBar}>
                    <IoIosCloseCircle />
                </button>
                <div>
                    <div className="h-15">
                        <div className="size-full flex items-center px-2">
                            <Link to="/" className='flex items-center font-ubuntu'>
                                <div className="grid place-items-center size-9 text-3xl text-orange-400">
                                    <MdAddTask />
                                </div>
                                <span className='text-2xl font-bold text-gray-700 dark:text-slate-100'>Task-Tracker</span>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-2">
                        {links.map((link) => (
                            <div className="px-2 my-1" key={link.title}>
                                <p className="font-semibold text-gray-400 text-sm uppercase">{link.title}</p>

                                {link.items.map((item) => (
                                    <div className="mt-2" key={item.link}>
                                        <NavLink
                                            to={`/${item.link.toLowerCase()}`}
                                            className={({ isActive }) =>
                                                isActive ? activeLink : normalLink
                                            }
                                        >
                                            <span className="size-9 grid place-items-center text-lg">
                                                {<item.icon />}
                                            </span>
                                            <span>{item.link}</span>
                                        </NavLink>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pb-3 px-2">
                    <Link to='/profile'>
                        <div className="flex items-center hover:bg-blue-200 p-1 rounded-lg transition duration-200 cursor-pointer">
                            <img src="public/users/profile.jpg" alt="profile" className='size-10 object-center rounded-full' />

                            <div className="ml-2">
                                <p className="text-black font-semibold dark:text-white">Tarek Fawzy</p>
                                <p className="text-xs">tarek@example.com</p>
                            </div>
                        </div></Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar;