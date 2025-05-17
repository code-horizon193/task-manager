import React from 'react';

import { IoPricetagsSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { LuCircleDotDashed } from "react-icons/lu";
import { FiGitCommit } from "react-icons/fi";
import { useAppContext } from '../context/contextAPI';

const TaskCard = ({ task }) => {
    const { settaskDetail, setopenDetail } = useAppContext();
    let color;
    let state;
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
            state = "bg-cyan-500/20 text-cyan-700"
            break
        case "in progress":
            state = "bg-amber-500/20 text-amber-700"
            break
        default:
            state = "bg-rose-500/20 text-rose-700"
            break
    }

    const handleDetailShow = (taskCard) => {
        setopenDetail(true);
        settaskDetail(taskCard)
    };

    return (
        <div
            className="p-2 bg-white rounded-md dark:bg-darkmode transition duration-200 border border-slate-300 dark:border-slate-700 relative"
            onClick={() => handleDetailShow(task)}
        >
            <div className="mb-4">
                <div className={`flex items-center gap-1.5 ${color} w-fit px-3 py-1 rounded-full font-semibold text-sm mb-1 capitalize`}>
                    <IoPricetagsSharp />
                    <span>{task.priority}</span>
                </div>
                <h4 className="text-lg font-semibold font-ubuntu text-slate-700 dark:text-slate-200">
                    {task.title}
                </h4>
                <p className="line-clamp-2 text-sm mt-0.5 text-slate-500">
                    {task.description}
                </p>
            </div>

            <div className="flex items-center justify-between my-3 pb-1">
                <div className="flex items-center">
                    {task.team.map((i, idx) => (
                        <img
                            key={idx}
                            src={i}
                            alt="team member"
                            className='size-9 rounded-full object-cover not-first:-ml-3'
                        />
                    ))}
                </div>
                <div className={`flex items-center gap-1.5 ${state} w-fit px-3 py-1 rounded-full font-medium text-sm mb-1 capitalize`}>
                    <LuCircleDotDashed />
                    <span>{task.status}</span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-500">
                <div className="flex items-center gap-2 w-fit bg-slate-500/10 dark:bg-slate-500/30 px-2 py-1 rounded-full text-sm font-medium">
                    <MdOutlineDateRange className='text-base' />
                    <p className="">
                        {task.startDate}
                    </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full text-sm text-blue-500 hover:underline transition bg-slate-50 dark:bg-slate-900">
                    <FiGitCommit />
                    <span>
                        {task.commits.length} commit
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TaskCard;