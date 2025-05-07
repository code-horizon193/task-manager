import React from 'react'
import { BsFacebook, BsLinkedin, BsTwitterX } from 'react-icons/bs';

const TeamCard = ({ name, image, about, position }) => {
    return (
        <div className='p-3 rounded-lg bg-slate-50/20 dark:bg-darkmode border border-slate-300 dark:border-slate-600 transition-all duration-200 shadow-md shadow-blue-300/20 hover:shadow-sm'>
            <div>
                <div className="flex items-start">
                    <div className="size-14 rounded-full">
                        <img
                            src={image}
                            alt={name}
                            className='size-full rounded-full object-cover'
                        />
                    </div>
                    <div className="ml-3.5">
                        <p className="font-bold text-slate-600 dark:text-slate-300 capitalize text-lg">{name}</p>
                        <div className="text-sm text-orange-500">     {position}
                        </div>
                    </div>
                </div>
                <p className="mt-3 text-sm text-center text-slate-500">
                    {about}
                </p>

                <div className="mt-3 pt-3">
                    <div className="flex items-center justify-center gap-2">
                        <span className="size-9 grid place-items-center border-slate-200 dark:border-slate-700 border rounded-full text-lg transition-all duration-200 hover:text-white hover:bg-orange-600 text-slate-600 dark:text-slate-300 cursor-pointer">
                            <BsFacebook />
                        </span>
                        <span className="size-9 grid place-items-center border-slate-200 dark:border-slate-700 border rounded-full text-lg transition-all duration-200 hover:text-white hover:bg-orange-600 text-slate-600 dark:text-slate-300 cursor-pointer">
                            <BsLinkedin />
                        </span>
                        <span className="size-9 grid place-items-center border-slate-200 dark:border-slate-700 border rounded-full text-lg transition-all duration-200 hover:text-white hover:bg-orange-600 text-slate-600 dark:text-slate-300 cursor-pointer">
                            <BsTwitterX />
                        </span>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}

export default TeamCard;