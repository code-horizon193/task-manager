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
    };
    return (
        <div className={`p-2 bg-white rounded-md dark:bg-darkmode transition duration-200 border border-slate-300 dark:border-slate-700 relative before:absolute before:w-10/12 before:py-1 before:top-0 hover:before:-top-1.5 before:transition-all before:duration-200 before:left-1/2 before:-translate-x-1/2 before:bg-orange-500 before:opacity-50 hover:before:opacity-100 before:-z-[1] before:rounded-t-full`}>
            <div className="mb-4">
                <h4 className="text-lg font-semibold font-ubuntu text-slate-700 dark:text-slate-200">
                    {item.title}
                </h4>
                <p className="text-sm text-slate-500">
                    Created at: {item.startDate}
                </p>
            </div>
            <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-300 my-3">
                {item.descripttion}
            </p>
            <div className="flex items-center gap-1.5">
                <span className="w-full py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 relative">
                    <span className={`${item.color} absolute top-0 left-0 h-full ${item.width} rounded-full`} />
                </span>
                <span className="text-base ml-1">
                    {item.percent}%
                </span>
            </div>

            <div className="mt-4 flex items-center justify-between gap-2">
                <div className="flex items-center">
                    {item.team.map((item, idx) => (
                        <img
                            key={idx}
                            src={item}
                            alt="team member"
                            className='size-9 rounded-full object-cover not-first:-ml-3 border-slate-700 border-2 dark:border-slate-200'
                        />
                    ))}
                </div>
                <div className={`${color} px-3 py-1 text-sm text-white rounded-full`}>
                    {item.priority}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;