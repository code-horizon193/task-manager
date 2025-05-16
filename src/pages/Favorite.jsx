import React from 'react'
import { useAppContext } from '../context/contextAPI';

const Favorite = () => {
    const { currentColor } = useAppContext();
    return (
        <div class="h-dvh w-full flex items-center justify-center">
            <div class="py-5 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <img
                        src={`${import.meta.env.BASE_URL}public/error/no-result.svg`}
                        alt="no data found"
                        className='h-72 w-full mb-3 animation'
                    />
                    <h1 class="mb-3 text-5xl tracking-tight font-extrabold text-slate-700 dark:text-slate-100">
                        No Data Found
                    </h1>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        Sorry, We don't have any recent information <br />
                        about your notes at this moment.
                    </p>
                    <button class="inline-flex text-white bg-orange-600 hover:bg-orange-800 focus:outline-none font-medium rounded-lg text-sm px-6 py-2.5 text-center my-2 cursor-pointer transition-all duration-200" style={{background: currentColor}}>
                        Add Items
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Favorite;