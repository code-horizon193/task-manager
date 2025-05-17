import React, { useRef, useEffect } from 'react'
import { CiStar } from "react-icons/ci";
import { LuCircleDashed, LuCircleCheck } from "react-icons/lu";
import { IoIosCalendar, IoMdMore } from "react-icons/io";
import { MdOutlineGroup, MdDownload, MdOutlineAccessTime } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { IoCloseSharp, IoTimeOutline } from "react-icons/io5";
import { useAppContext } from '../context/contextAPI';
import { LuTags } from "react-icons/lu";
import { LuMessageCircleCode } from "react-icons/lu";

const ProjectDetails = ({ project }) => {
    const { setprojectDetail, setopenProject, currentColor } = useAppContext();
    const sideMenuRef = useRef(null);

    const btnStyle = 'size-8 grid place-items-center rounded-full text-xl text-slate-600 dark:text-slate-200 cursor-pointer hover:bg-slate-100  dark:hover:bg-slate-800';
    const closeProject = () => {
        setopenProject(false);
        setprojectDetail(null);
    }


    useEffect(() => {
        const handleOutClick = (event) => {
            if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
                closeProject();
            }
        };

        document.addEventListener("mousedown", handleOutClick);

        return () => {
            document.removeEventListener("mousedown", handleOutClick)
        }
    }, []);

    let color;
    switch (project.priority) {
        case "High":
            color = "bg-blue-500/20 text-blue-700"
            break
        case "Medium":
            color = "bg-green-500/20 text-green-700"
            break
        default:
            color = "bg-red-500/20 text-red-700"
            break
    };

    let status;
    switch (project.statues) {
        case "compelete":
            status = "bg-cyan-500/20 text-cyan-700 relative before:absolute before:size-2 before:bg-cyan-500 before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            break
        case "in progress":
            status = "bg-amber-500/20 text-amber-700 relative before:absolute before:size-2 before:bg-amber-500 before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            break
        case "on research":
            status = "bg-yellow-500/20 text-yellow-700 relative before:absolute before:size-2 before:bg-yellow-500 before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            break
        case "on track":
            status = "bg-fuchsia-500/20 text-fuchsia-700 relative before:absolute before:size-2 before:bg-fuchsia-500 before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            break
        default:
            status = "bg-rose-500/20 text-rose-700 relative before:absolute before:size-2 before:bg-rose-500 before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
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
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-500/50 shadow">
                    <button
                        className={btnStyle}
                        onClick={closeProject}
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

                <div className="mt-3 px-6">
                    <h2 className="text-xl font-semibold text-slate-600 dark:text-slate-100 capitalize">
                        {project.title}
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
                                {project.startDate}
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
                                <span className={`${status} px-5 py-1 rounded-md text-base capitalize`}>
                                    {project.statues}
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
                                    {project.priority}
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
                                {project.endDate}
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-0.5">
                            <div className="flex items-center gap-3 w-1/2">
                                <LuTags />
                                <span className="text-base">
                                    Tags
                                </span>
                            </div>
                            <div className="w-1/2 text-start text-base">
                                <div className="flex items-center gap-2">
                                    {project.tags.map((tag) => (
                                        <div
                                            key={tag}
                                            className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-100 text-sm"
                                        >
                                            {tag}
                                        </div>
                                    ))}
                                </div>
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
                                    {project.team.map((member, index) => (
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
                                {project.descripttion}
                            </p>
                        </div>

                    </div>

                    <div className="mt-5">
                        <p className="text-base font-semibold text-slate-600 dark:text-slate-100">
                            Project Status :
                        </p>

                        <div className="mt-3">
                            <div className="w-full h-1 bg-slate-100 rounded-sm dark:bg-slate-700 relative group">
                                <span
                                    className={`absolute left-0 top-1/2 -translate-y-1/2 h-full ${project.color} ${project.width} rounded-sm group-hover:h-1.5`}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="my-6">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-100 font-ubuntu text-lg">
                            <LuMessageCircleCode />
                            <span>Comments : </span>
                        </div>

                        <div className="p-2.5 border border-slate-200 dark:border-slate-700 rounded-md">
                            {project.comments.map((comment) => (
                                <div
                                    key={comment.name}
                                    className="relative h-full before:absolute before:h-full before:w-px before:top-1 before:left-6 before:-z-[1] before:bg-slate-300 px-2 z-10 not-last:pb-2"
                                >
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={comment.img}
                                            alt=""
                                            className='size-9 rounded-full object-cover aspect-square'
                                        />
                                        <div className="">
                                            <p className="text-base font-medium font-ubuntu text-slate-600 dark:text-slate-200">
                                                {comment.name}
                                            </p>
                                            <p
                                                className="text-xs text-orange-500 -mt-0.5 capitalize"
                                                style={{
                                                    color: currentColor
                                                }}
                                            >
                                                @{comment.position}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-base text-slate-600 dark:text-slate-100 my-2 pl-10">
                                        {comment.Comment}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className='px-4 my-6 py-1.5 border w-fit rounded-md border-slate-300 dark:border-slate-800 flex items-center gap-3 transition-all duration-200 cursor-pointer hover:bg-slate-50 dark:hover:bg-gray-800'>
                        <div className="flex items-center">
                            <FaFilePdf className='text-2xl text-red-500' />

                            <div className="ml-1.5">
                                <p className="text-sm">User Flow</p>
                                <p className="text-[10px] text-slate-600 dark:text-slate-200">PDF &#8226; {project.fileSize}</p>
                            </div>
                        </div>
                        <div className="text-2xl text-slate-600 dark:text-slate-50 ml-2">
                            <MdDownload />
                        </div>
                    </button>
                </div>

            </div>
        </section>
    )
}

export default ProjectDetails
