import React from 'react';
import { statics, barTools, myTeam, table, projectData, tasksData, activityData, timeLine, pirorityData } from '../data';
import MultiLineChart from '../components/MultiLineChart';
import { BiSearch } from 'react-icons/bi';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import DounghtChart from '../components/DounghtChart';
import { useAppContext } from '../context/contextAPI';

const Dashboard = () => {
  const { currentColor } = useAppContext();

  return (
    <div className='page'>
      <div className="p-2">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 p-2">
          {statics.map((item) => (
            <div
              key={item.title}
              className={`${item.bgColor} p-4 py-5 rounded-md text-white`}
            >
              <div className="flex flex-col items-center">
                <p className="mb-1 font-bold text-xl font-ubuntu">
                  {item.value}
                </p>
                <p className="font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 w-full">
          <MultiLineChart />
        </div>

        <div className="mt-5 w-full flex flex-col md:flex-row items-baseline gap-3.5">
          <div className="w-full md:w-1/2">
            <BarChart
              visualData={[projectData, tasksData]}
              labels={["total", "completed", "in progress", "on hold", "completion rate"]}
              label1="Projects"
              label2="Tasks"
            />
          </div>
          <div className="w-full md:w-1/2">
            <PieChart
              mainLabel="Activity"
              visualData={activityData}
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-baseline gap-3.5">
          <div className="w-full md:w-1/2">
            <LineChart
              vdata={timeLine}
              mlabel="Projects timline"
            />
          </div>
          <div className="w-full md:w-[45%]">
            <DounghtChart vdata={pirorityData} />
          </div>
        </div>


        <section className="flex gap-4 flex-col md:flex-row mt-8 p-2">
          <div className="flex-1 rounded-md">
            <h3 className="px-2 mb-3 text-xl font-semibold font-ubuntu text-gray-700 dark:text-gray-200">
              Quick Access
            </h3>
            <ul className='border border-slate-300 rounded-md dark:border-slate-700'>
              {barTools.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center justify-between px-3 py-2 not-last:border-b border-slate-200 dark:border-slate-600 group"
                >
                  <div className="flex items-center text-slate-600 group-hover:text-blue-500 dark:text-slate-200 transition-all duration-150">
                    <span className="text-xl">
                      {<item.icon />}
                    </span>
                    <span className="ml-2 capitalize">
                      {item.title}
                    </span>
                  </div>
                  <div className={`${item.color} text-white text-xs px-2 py-0.5 rounded-full`}>
                    {item.mes}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 rounded-md">
            <h3 className="px-2 mb-3 text-xl font-semibold font-ubuntu text-gray-600 dark:text-gray-200">
              My Team
            </h3>
            <ul className='border border-slate-300 rounded-md dark:border-slate-700'>
              {myTeam.map((member) => (
                <ul
                  key={member.name}
                  className="flex items-center p-3 not-last:border-b border-slate-200 dark:border-slate-700 group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className='size-10 rounded-full object-cover'
                  />

                  <div className="ml-2">
                    <p className="capitalize font-medium text-gray-700 dark:text-gray-300 font-ubuntu">
                      {member.name}
                    </p>

                    <p className="text-xs text-purple-500 -mt-0.5" style={{color: currentColor}}>
                      {member.position}
                    </p>
                  </div>
                </ul>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-6">
          <div className="border border-slate-400 dark:border-slate-700 p-3 rounded-md">
            <h3 className="text-lg text-slate-600 dark:text-slate-200 font-semibold">
              Projects List
            </h3>

            <div className="w-full mt-3 overflow-x-auto">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className='hidden md:inline'>Show</span> <span className="px-3 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 mx-0.5">{table.length}</span> entries
                </div>

                <div className="flex items-center">
                  <label htmlFor="search">
                    Search:
                  </label>
                  <div className="flex items-center px-3 py-0.5 border ml-2 gap-1 border-slate-300 dark:border-slate-700 rounded-sm">
                    <input
                      type="text"
                      name='search'
                      id='search'
                      className='border-none outline-none  text-gray-700 dark:text-slate-300'
                    />
                    <span className="text-slate-500 text-lg">
                      <BiSearch />
                    </span>
                  </div>
                </div>
              </div>
              <table className='w-full mt-3'>
                <thead className='dark:bg-neutral-800 bg-slate-200'>
                  <tr>
                    <td className='font-bold uppercase p-1 px-2 text-slate-600 dark:text-slate-200 text-sm sm:text-base'>application</td>
                    <td className='font-bold uppercase p-1 px-2 text-slate-600 dark:text-slate-200 text-sm sm:text-base'>sales</td>
                    <td className='font-bold uppercase p-1 px-2 text-slate-600 dark:text-slate-200 text-sm sm:text-base'>price</td>
                    <td className='font-bold uppercase p-1 px-2 text-slate-600 dark:text-slate-200 text-sm sm:text-base'>total</td>
                    <td className='font-bold uppercase p-1 px-2 text-slate-600 dark:text-slate-200 text-sm sm:text-base'>state</td>
                    <td className='font-bold uppercase p-1 px-2 text-slate-600 dark:text-slate-200 text-sm sm:text-base'>team</td>
                  </tr>
                </thead>
                <tbody>
                  {table.map((row, index) => (
                    <tr
                      key={index}
                      className="not-first:border-t border-slate-300 dark:border-slate-700 w-full hover:bg-blue-500/20"
                    >
                      <td className='p-2 text-slate-700 dark:text-slate-200'>
                        <p className='font-semibold text-base'>{row.app}</p>
                        <p className='text-sm text-slate-500'>{row.deatils}</p>
                      </td>

                      <td className='p-2 font-semibold text-slate-700 dark:text-slate-200 text-sm sm:text-base'>{row.sales}</td>
                      <td className='p-2 font-semibold text-slate-700 dark:text-slate-200 text-sm sm:text-base'>{row.price}</td>
                      <td className='p-2 font-semibold text-slate-700 dark:text-slate-200 text-sm sm:text-base'>{row.total}</td>
                      <td className="p-2 text-center">
                        <span className={`${row.color} text-white px-2.5 py-1 rounded-full text-sm `}>
                          {row.state}
                        </span>
                      </td>
                      <td>
                        <div className="flex items-center">
                          {row.team.map((person, idx) => (
                            <img
                              src={person}
                              alt={person}
                              className="size-8 rounded-full object-cover not-first:-ml-3 border"
                            />
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard;