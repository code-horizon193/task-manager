import React, { useRef, useState } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

import { checkboxItem, profileInfo, colors, myfavouriteMess } from '../data';
import { CiEdit } from "react-icons/ci";
import { useAppContext } from '../context/contextAPI';
import { MdBorderColor } from 'react-icons/md';

const Settings = () => {
  const { isGrid, setisGrid, currentColor, setcurrentColor } = useAppContext();

  const inputRef = useRef(null);
  const openimgMenu = () => {
    inputRef.current.click();
  }

  const newColor = (color) => {
    setcurrentColor(color);
  }

  return (
    <div className='page'>
      <div className="p-2 mt-1">
        <div className="mb-4">
          <h3 className='text-2xl font-thin text-orange-600'
            style={{ color: currentColor }}
          >
            Welcome back, Robert!
          </h3>
          <p className="text-sm text-slate-400 dark:text-slate-500">
            You have 12 new messages and 7 new notifications.
          </p>
        </div>

        <div className="p-3.5 py-4 rounded-md border border-slate-200 dark:border-slate-700">
          <div className="mb-2">
            <h4 className='text-lg font-semibold font-ubuntu capitalize whitespace-nowrap'>
              profile details
            </h4>
          </div>

          <div className='my-5 flex flex-col items-center'>
            <div className="relative size-28 bg-amber-200 rounded-full">
              <img
                src="public/users/user-13.jpg"
                alt="profile img"
                className='size-full rounded-full object-cover select-none'
              />
              <button
                className='size-7 bg-amber-400 grid place-items-center rounded-full text-xl absolute right-1 -bottom-1 text-gray-800 hover:bg-amber-500 cursor-pointer'
                onClick={openimgMenu}
              >
                <CiEdit />
              </button>
              <input
                ref={inputRef}
                type="file"
                name="pro-img"
                id="pro-img"
                hidden
              />

            </div>
            <div className="mt-3 text-center">
              <p className="text-black font-semibold dark:text-white text-lg">Robert Nelson</p>
              <p className="text-sm text-slate-500 -mt-0.5">Washington, d.c.</p>
            </div>
          </div>
          <div className="p-1 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-3 rounded-md shadow-lg border-slate-200 border dark:border-slate-700">
              <h5 className="mb-4 text-base font-bold capitalize font-ubuntu">
                info
              </h5>

              <div className="mt-4">
                {profileInfo.map((item, index) => (
                  <div
                    key={index}
                    className="py-2 border-b border-b-slate-200 dark:border-b-slate-800 grid gap-0.5">
                    <span className="text-sm text-slate-400 dark:text-slate-600">{item.title}: </span>
                    <p className="text-[14px] text-slate-600 dark:text-slate-200">
                      {item.data}
                    </p>
                  </div>
                ))}

                <ul className='mt-2'>
                  <p className="text-sm text-slate-400 dark:text-slate-600">Socila: </p>

                  <div className="grid gap-0.5">
                    <li className="flex items-center gap-1 text-base text-slate-600 dark:text-slate-200">
                      <FaXTwitter />
                      <span>
                        twitter.com/example
                      </span>
                    </li>
                    <li className="flex items-center gap-1 text-base text-slate-600 dark:text-slate-200">
                      <FaFacebook />
                      <span>
                        facebook.com/example
                      </span>
                    </li>
                    <li className="flex items-center gap-1 text-base text-slate-600 dark:text-slate-200">
                      <FaGithub />
                      <span>
                        github.com/example
                      </span>
                    </li>
                    <li className="flex items-center gap-1 text-base text-slate-600 dark:text-slate-200">
                      <FaInstagram />
                      <span>
                        instagram.com/example
                      </span>
                    </li>
                  </div>
                </ul>

              </div>
            </div>

            <div className="p-3 rounded-md shadow-lg border-slate-200 border dark:border-slate-700">
              <h5 className="mb-4 text-base font-bold capitalize font-ubuntu">
                Edit
              </h5>

              <div className="mt-6 ">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder='First Name'
                    className='p-2 outline-none border-slate-200 dark:border-slate-700 border rounded-md text-base text-slate-500 placeholder:text-slate-500 focus:border-orange-500'
                  />
                  <input
                    type="text"
                    placeholder='Last Name'
                    className='p-2 outline-none border-slate-200 dark:border-slate-700 border rounded-md text-base text-slate-500 placeholder:text-slate-500 focus:border-orange-500'
                  />
                </div>

                <div className="grid gap-2 mt-2">
                  <input
                    type="text"
                    placeholder='BirthDate'
                    className='w-full px-3 py-1.5 outline-none border-slate-200 dark:border-slate-700 border rounded-md text-slate-500 placeholder:text-slate-500 focus:border-orange-500'
                  />

                  <input
                    type="text"
                    placeholder='http://'
                    className='w-full px-3 py-1.5 outline-none border-slate-200 dark:border-slate-700 border rounded-md text-slate-500 placeholder:text-slate-500 focus:border-orange-500'
                  />

                  <input
                    type="text"
                    placeholder='Address Line 1'
                    className='w-full px-3 py-1.5 outline-none border-slate-200 dark:border-slate-700 border rounded-md text-slate-500 placeholder:text-slate-500 focus:border-orange-500'
                  />

                  <input
                    type="text"
                    placeholder='Address Line 2'
                    className='w-full px-3 py-1.5 outline-none border-slate-200 dark:border-slate-700 border rounded-md text-slate-500 placeholder:text-slate-500 focus:border-orange-500'
                  />

                  <input
                    type="text"
                    placeholder='City'
                    className='w-full px-3 py-1.5 outline-none border-slate-200 dark:border-slate-700 border rounded-md text-slate-500 placeholder:text-slate-500 focus:border-orange-500'
                  />

                  <input
                    type="text"
                    placeholder='State/Province'
                    className='w-full px-3 py-1.5 outline-none border-slate-200 dark:border-slate-700 border rounded-md text-slate-500 placeholder:text-slate-500 focus:border-orange-500'
                  />

                  <div className="flex items-center gap-3">
                    <div class="flex w-full items-center px-4 border border-gray-200 rounded-sm dark:border-gray-700">
                      <input
                        type="radio"
                        name="gender"
                        id="male-btn"
                        className='size-4 text-orange-600 bg-gray-100 border-gray-500 dark:bg-gray-700 checked:accent-orange-500 checked:size-5'
                      />
                      <label for="male-btn" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                    </div>
                    <div class="flex w-full items-center px-4 border border-gray-200 rounded-sm dark:border-gray-700">
                      <input
                        type="radio"
                        name="gender"
                        id="female-btn"
                        className='size-4 text-orange-600 bg-gray-100 border-gray-300 dark:bg-gray-700 checked:accent-orange-500 checked:size-5'
                      />
                      <label for="female-btn" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4 px-2">
                  <button className='px-6 w-full py-1 bg-orange-500 text-white rounded-md text-base transition-all duration-200 active:opacity-90 hover:bg-orange-600 cursor-pointer' style={{ background: currentColor }}>
                    Save
                  </button>
                  <button className='px-6 w-full py-1 bg-white dark:bg-darkmode text-slate-700 dark:text-slate-200 rounded-md text-base transition-all duration-200  cursor-pointer border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-900'>
                    Cancle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="p-3.5 py-4 rounded-md border border-slate-200 dark:border-slate-700">
            <div className="mb-2">
              <h4 className='text-lg font-semibold font-ubuntu capitalize whitespace-nowrap'>
                change password
              </h4>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5 font-ubuntu">
              <input
                type='text'
                minLength="4"
                placeholder='Current Password'
                className='w-full px-3 py-1.5 outline-none border-slate-200 dark:border-slate-700 border rounded-md text-slate-500 focus:border-orange-500 placeholder:text-slate-500'
              />
              <input
                type='text'
                minLength="4"
                placeholder='New Password'
                className='w-full px-3 py-1.5 outline-none border-slate-200 dark:border-slate-700 border rounded-md text-slate-500 focus:border-orange-500 placeholder:text-slate-500'
              />
              <input
                type='password'
                minLength="4"
                placeholder='Confirm New Password'
                className='w-full px-3 py-1.5 outline-none border-slate-200 dark:border-slate-700 border rounded-md text-slate-500 placeholder:text-slate-500 focus:border-orange-500'
              />
            </div>

            <p className="font-ubuntu text-sm my-2 ml-1">
              Minimum 8 characters
            </p>
            <button className='mt-3 w-full sm:w-fit font-ubuntu px-5 py-1 bg-orange-500 rounded-md text-white hover:opacity-90 cursor-pointer transition-all duration-200' style={{ background: currentColor }}>
              save change
            </button>
          </div>
        </div>

        <div className="mt-6">
          <div className="p-3.5 py-4 rounded-md border border-slate-200 dark:border-slate-700">
            <div className="mb-2">
              <h4 className='text-lg font-semibold font-ubuntu capitalize whitespace-nowrap'>
                General Settings
              </h4>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <p className="mb-2 font-medium text-orange-500" style={{ color: currentColor }}>
                  Custom Settings
                </p>
                <ul>
                  {checkboxItem.map((field, idx) => (
                    <li
                      key={idx}
                      className="w-full px-2 py-1 flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        name="settings"
                        id={field.connectId}
                        className='size-4 border outline-none checked:accent-orange-500 appearance-none border-slate-200 dark:border-slate-700 rounded-sm checked:bg-orange-400 checked:border-orange-200 cursor-pointer'
                      />
                      <label
                        htmlFor={field.connectId}
                        className='text-base font-ubuntu text-slate-700 dark:text-slate-100'
                      >
                        {field.title}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2 font-medium text-orange-500" style={{ color: currentColor }}>
                  I'd like to receive the following emails:
                </p>

                <ul>
                  {myfavouriteMess.map((mess, idx) => (
                    <li
                      key={idx}
                      className="w-full px-2 py-1 flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        name="settings"
                        id={mess.split(1, 5)}
                        className='size-4 border outline-none checked:accent-orange-500 appearance-none border-slate-200 dark:border-slate-700 rounded-sm checked:bg-orange-400 checked:border-orange-200 cursor-pointer'
                      />
                      <label
                        htmlFor={mess.split(1, 5)}
                        className='text-base font-ubuntu text-slate-700 dark:text-slate-100'
                      >
                        {mess}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-2 font-medium text-orange-500" style={{ color: currentColor }}>
                Custom Your Colors
              </p>
              <div className="flex flex-row gap-0.5 flex-wrap">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-2.5 px-2 py-0.5"
                    onClick={() => newColor(color.color)}
                  >
                    <span
                      className="size-6.5 rounded-full grid place-items-center"
                      style={{ background: color.color }}
                    >
                      <FaCheck className={`text-sm ${currentColor === color.color ? "inline-block" : "hidden"} text-white`} />
                    </span>
                    <span className='text-base text-slate-700 dark:text-slate-200 font-ubuntu'>{color.cName}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-2 font-medium text-orange-500" style={{ color: currentColor }}>
                Custom Projects / Tasks View
              </p>

              <div className="flex items-center gap-4 mt-3">
                <div className="w-full md:w-sm">
                  <div 
                    className={`grid grid-cols-2 gap-2.5 w-full p-6 bg-slate-200/60 dark:bg-slate-800/70 border-2 rounded-md ${isGrid ? "border-orange-500 ring-3 ring-orange-600" : "border-transparent"} transition-all duration-200 cursor-pointer`}
                    onClick={() => setisGrid(true)}
                  >
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <span
                        key={i}
                        className="bg-slate-300 dark:bg-slate-600 p-3 rounded-md"
                      />
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-sm">
                  <div 
                    className={`grid grid-cols-1 gap-2.5 w-full p-6 bg-slate-200/60 dark:bg-slate-800/70 rounded-md ${isGrid ? "border-transparent" : "border-orange-500 ring-3 ring-orange-600"} border-2 transition-all duration-200 cursor-pointer`}
                    onClick={() => setisGrid(false)}
                  >
                    {[1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className="bg-slate-300 dark:bg-slate-600 p-3 rounded-md"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;