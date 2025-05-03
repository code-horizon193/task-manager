import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section class="h-dvh w-full flex items-center justify-center">
            <div class="py-5 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <img 
                       src="public/error/error.svg" 
                       alt="error not found"
                       className='h-72 w-full'
                    />
                    <h1 class="mb-3 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-700 dark:text-slate-100">404</h1>
                    <p class="mb-3 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link to='/home' class="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2">Back to Homepage</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound;