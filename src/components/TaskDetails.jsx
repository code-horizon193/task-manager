import React, { useRef, useEffect } from 'react'
import { CiStar } from "react-icons/ci";
import { LuCircleDashed, LuCircleCheck } from "react-icons/lu";
import { IoIosCalendar, IoMdMore } from "react-icons/io";
import { MdOutlineGroup, MdDownload, MdOutlineAccessTime } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { IoGitCommitSharp, IoCloseSharp, IoTimeOutline } from "react-icons/io5";

import { useAppContext } from '../context/contextAPI';

const TaskDetails = ({ task }) => {
    const { settaskDetail, setopenDetail , currentColor } = useAppContext();
    const sideMenuRef = useRef(null);

    useEffect(() => {
        const handleOutClick = (event) => {
            if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
                setopenDetail(false);
            }
        };

        document.addEventListener("mousedown", handleOutClick);

        return () => {
            document.removeEventListener("mousedown", handleOutClick)
        }
    }, []);

    const btnStyle = 'size-8 grid place-items-center rounded-full text-xl text-slate-600 dark:text-slate-200 cursor-pointer hover:bg-slate-100  dark:hover:bg-slate-800';
    const closeDetail = () => {
        setopenDetail(false);
        settaskDetail(null);
    }
    let color;
    let state;
    let percent = task.percent;
    switch (task.priority) {
        case "high":
            color = "bg-blue-500/20 text-blue-700"
            break
        case "medium":
            color = "bg-green-500/20 text-green-700"
            break
        default:
            color = "bg-red-500/20 text-red-700"
            break
    }
    switch (task.status) {
        case "completed":
            state = "bg-cyan-500/20 text-cyan-700 relative before:absolute before:size-2 before:bg-cyan-500 before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            break
        case "in progress":
            state = "bg-amber-500/20 text-amber-700 relative before:absolute before:size-2 before:bg-amber-500 before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            break
        default:
            state = "bg-red-500/20 text-red-700 relative before:absolute before:size-2 before:bg-red-500 before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            break
    }
    return (
        <section
            className="w-full fixed top-0 right-0 min-h-screen h-full shadow-lg bg-black/50 transition-all duration-500"
            style={{ zIndex: 99999 }}
        >
            <div
                ref={sideMenuRef}
                className="absolute right-0 md:top-1 md:right-1 top-0 bg-white h-full max-w-lg overflow-y-scroll blockoverflow w-full transition-all duration-300 dark:bg-gray-900 rounded-l-xl rounded-r-sm"
            >
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-500/50 shadow" >
                    <button
                        className={btnStyle}
                        onClick={closeDetail}
                    >
                        <IoCloseSharp />
                    </button>

                    <div className="flex items-center gap-1">
                        <button
                            className={btnStyle}
                        >
                            <MdOutlineAccessTime />
                        </button>
                        <button
                            className={btnStyle}
                        >
                            <CiStar />
                        </button>
                        <button
                            className={btnStyle}
                        >
                            <IoMdMore />
                        </button>
                    </div>
                </div>

                <div className="mt-2 px-6">
                    <h2 className="text-xl font-semibold text-slate-600 dark:text-slate-100 capitalize">
                        {task.title}
                    </h2>

                    <div className="mt-3 space-y-2">
                        <div className="flex items-center justify-between p-0.5">
                            <div className="flex items-center gap-3 w-1/2">
                                <IoTimeOutline />
                                <span className="text-base">
                                    Created time
                                </span>
                            </div>
                            <div className="w-1/2 text-start text-base">
                                {task.startDate}
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-0.5">
                            <div className="flex items-center gap-3 w-1/2">
                                <LuCircleDashed />
                                <span className="text-base">
                                    Status
                                </span>
                            </div>
                            <div className="w-1/2 text-start text-base">
                                <span className={`${state} px-5 py-1 rounded-md`}>
                                    {task.status}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-0.5">
                            <div className="flex items-center gap-3 w-1/2">
                                <LuCircleCheck />
                                <span className="text-base">
                                    Priority
                                </span>
                            </div>
                            <div className="w-1/2 text-start text-base">
                                <span className={`${color} px-4 py-1 rounded-full text-sm capitalize`}>
                                    {task.priority}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-0.5">
                            <div className="flex items-center gap-3 w-1/2">
                                <IoIosCalendar />
                                <span className="text-base">
                                    Due Date
                                </span>
                            </div>
                            <div className="w-1/2 text-start text-base">
                                {task.endDate}
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-0.5">
                            <div className="flex items-center gap-3 w-1/2">
                                <MdOutlineGroup />
                                <span className="text-base">
                                    Assignees
                                </span>
                            </div>
                            <div className="w-1/2 text-start text-base">
                                <div className="flex items-center">
                                    {task.team.map((member, index) => (
                                        <img
                                            key={index}
                                            src={member}
                                            alt="team-member"
                                            className='size-8 rounded-full not-first:-ml-2.5 border'
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="p-3 bg-slate-100 dark:bg-gray-800 rounded-md">
                            <p className="text-base font-medium font-ubuntu">
                                Project Description
                            </p>

                            <p className="mt-1 text-slate-500 text-sm">
                                {task.description}
                            </p>
                        </div>
                    </div>

                    <div className="mt-3">
                        <p className="text-base font-semibold text-slate-600 dark:text-slate-100">
                            Progress Status :
                        </p>

                        <div className="mt-3">
                            <div className="w-full h-1 bg-slate-100 rounded-sm dark:bg-slate-700 relative group">
                                <span
                                    className={`absolute left-0 top-1/2 -translate-y-1/2 h-full ${task.color} rounded-sm group-hover:h-1.5`}
                                    style={{
                                        width: `${task.percent}%`
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-100 font-ubuntu text-lg">
                            <IoGitCommitSharp />
                            <span>Latest Commits : </span>
                        </div>

                        <div className="">
                            <div className="relative mt-3 max-h-72 h-full overflow-y-auto blockoverflow border py-3 border-slate-500/50 rounded-md">
                                {task.commits.map((commit, index) => (
                                    <div
                                        key={index}
                                        className="h-full relative before:absolute before:h-full before:w-px before:top-1 before:left-6 before:-z-[1] before:bg-slate-300 px-2 z-10 pb-2 overflow-hidden"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="size-8 rounded-full text-lg font-ubuntu bg-orange-500 grid place-items-center font-semibold aspect-square text-white"
                                                style={{ background: currentColor }}
                                            >
                                                {commit.name[0]}
                                            </div>
                                            <p className="md:text-base flex items-center flex-wrap text-sm">
                                                <span className='text-slate-600 dark:text-slate-400'>{commit.name} </span>
                                                <span className=" mx-2 text-sm">
                                                    make a Commit in
                                                </span>
                                                <span>
                                                    <span className="text-orange-500 text-sm" style={{ color: currentColor }}>{commit.time} </span> at <span className="text-orange-400 text-sm" style={{ color: currentColor }}>{commit.date}</span>
                                                </span>
                                            </p>
                                        </div>

                                        <div className="mt-2 px-10">
                                            <p className="text-base text-slate-700 dark:text-slate-200 font-ubuntu">
                                                {commit.commitMessage}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="my-6">
                        <p className="text-base mb-2 font-semibold text-slate-600 dark:text-slate-50">
                            Report State :
                        </p>
                        <div className="px-4 py-1.5 border w-fit rounded-md border-slate-300 dark:border-slate-800 flex items-center gap-1.5 transition-all duration-200 cursor-pointer hover:bg-slate-50 dark:hover:bg-gray-800">
                            <FaFilePdf className='text-xl text-red-500' />
                            <span className="capitalize text-slate-600 dark:text-slate-100">{task.report}</span>
                        </div>

                        <button
                            className='flex items-center gap-2 w-1/2 mx-auto mt-4 py-2 bg-orange-500 text-center justify-center text-white rounded-sm transition-all duration-300 cursor-pointer hover:opacity-85'
                            style={{ background: currentColor }}
                        >
                            <MdDownload />
                            <span>Download Task</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TaskDetails
