import React, { useState, useRef, useEffect } from 'react';
import { FiMoreHorizontal } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdOutlineFavorite } from "react-icons/md";

const NoteCard = ({ item }) => {
    const [dropMenu, setdropMenu] = useState(false);
    const [expanded, setexpanded] = useState(true);
    const [expandedtitle, setexpandedtitle] = useState(true);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleOutClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setdropMenu(false);
            }
        };

        document.addEventListener("mousedown", handleOutClick);

        return () => {
            document.removeEventListener("mousedown", handleOutClick)
        }
    }, []);


    const toggleMenu = () => {
        setdropMenu((prev) => !prev);
    };

    const expandText = () => {
        setexpanded((value) => !value)
    };
    const expandTitle = () => {
        setexpandedtitle((value) => !value)
    };
    return (
        <div className='p-2 bg-white rounded-md dark:bg-darkmode transition duration-200 border border-slate-300 dark:border-slate-700'>
            <div className="flex items-center justify-between">
                <p className="text-gray-500 text-xs">
                    {item.date}
                </p>
                <div className="relative">
                    <button
                        className='p-1 text-lg'
                        onClick={toggleMenu}
                    >
                        <FiMoreHorizontal />
                    </button>

                    <div
                        ref={menuRef}
                        className={`w-44 rounded-sm absolute ${dropMenu ? "" : "hidden"} top-7 p-1 bg-slate-50 border-slate-300 dark:border-slate-600 border dark:bg-darkmode right-5 transition duration-200 z-40`}
                    >

                        <button className="flex w-full font-semibold items-center gap-1.5 capitalize p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-900"
                            onClick={toggleMenu}
                        >
                            <MdDelete className='text-red-500 text-lg' />
                            <span className='text-sm whitespace-nowrap'>delete</span>
                        </button>

                        <button className="flex w-full font-semibold items-center gap-2 capitalize p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-900"
                            onClick={toggleMenu}
                        >
                            <CiEdit className='text-green-500 text-lg' />
                            <span className='text-sm whitespace-nowrap'>edit</span>
                        </button>

                        <button className='flex w-full font-semibold items-center gap-2 capitalize p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-900'
                            onClick={toggleMenu}
                        >
                            <MdOutlineFavorite className='text-orange-500 text-lg' />
                            <span className='text-sm whitespace-nowrap'>add to favourite</span>
                        </button>

                    </div>
                </div>
            </div>

            <h3 className={`my-1 text-lg font-semibold leading-6 ${expandedtitle ? "line-clamp-1" : ""} cursor-pointer text-gray-700 dark:text-gray-300`}
                onClick={expandTitle}
                title={`${expandedtitle ? "click to open" : "click to close"}`}
            >
                {item.title}
            </h3>

            <p className={`my-2 text-sm text-slate-500 ${expanded ? "line-clamp-2" : ""} cursor-pointer`}
                onClick={expandText}
                title={`${expanded ? "click to open" : "click to close"}`}
            >
                {item.description}
            </p>

            <div className="flex items-center gap-1.5 w-full overflow-x-auto blockoverflow">
                {item.tags.map((tag) => (
                    <span key={tag} className={`py-1 px-2 text-xs md:text-sm rounded-md whitespace-nowrap ${tag.bg} ${tag.color}`}>
                        {tag.tagname}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default NoteCard;