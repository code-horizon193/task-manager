import React from 'react'

const ProjectCard = ({ item }) => {
    let color;
    switch (item.priority) {
        case "Low":
            color = "bg-red-500"
            break
        case "High":
            color = "bg-blue-500"
            break;
        default:
            color = "bg-green-500"
            break;
    }
    return (
        <div className='p-2 bg-white rounded-md dark:bg-darkmode transition duration-200 border border-slate-300 dark:border-slate-700'>
            <div className="p-1 h-32 flex flex-col justify-between">
                <div className="relative pl-3">
                    <span className={`size-2 rounded-full absolute left-0 top-1/2 -translate-y-1/2 ${item.color}`}></span>
                    <p className="ml-1 text-sm md:text-base font-bold text-gray-700 dark:text-slate-300">{item.title}</p>
                </div>

                <div className={`text-xs p-1 px-2 text-white font-medium w-fit rounded-full ${color}`}>
                    {item.priority}
                </div>

                <div className="py-1 text-xs font-medium underline text-blue-600">
                    {item.startDate}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;