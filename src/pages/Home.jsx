import React from 'react';
import { BsFolderFill } from 'react-icons/bs';
import { tasks, notes } from '../data';
import ProjectCard from '../components/projectCard';
import NoteCard from '../components/NoteCard';
import { GrNotes } from 'react-icons/gr';

const Home = () => {
  return (
    <div className='relative screen-full overflow-x-hidden'>
      <div className="flex w-full items-start gap-6 flex-col md:flex-row">
        <section className="md:flex-4 p-2 w-full">

          <div className="mb-5 border border-slate-300 rounded-lg bg-slate-50 p-2 shadow-md dark:bg-slate-900 dark:border-slate-700">
            <h2 className='flex items-center gap-2 text-lg font-semibold font-ubuntu text-gray-700 dark:text-slate-200'>
              <BsFolderFill className='text-xl' />
              <span>My Projects</span>
            </h2>

            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-3">
              {tasks.map((task, index) => (
                <ProjectCard item={task} key={index} />
              ))}
            </div>
          </div>

          <div className="mb-5 border border-slate-300 rounded-lg bg-slate-50 p-2 shadow-md dark:bg-slate-900 dark:border-slate-700">
            <h2 className='flex items-center gap-2 text-lg font-semibold font-ubuntu text-gray-700 dark:text-slate-200'>
              <GrNotes className='text-xl' />
              <span>My Notes</span>
            </h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {notes.map((task, index) => (
                <NoteCard item={task} key={index} />
              ))}
            </div>
          </div>

        </section>
        <section className="md:flex-2 p-2 w-full">
          <div className="w-full flex gap-3 md:flex-col flex-row">

              <div className="">
                
              </div>

          </div>
        </section>
      </div>
    </div>
  )
}

export default Home;