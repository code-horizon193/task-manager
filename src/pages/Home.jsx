import React, { useState } from 'react';
import { BsFolderFill } from 'react-icons/bs';
import { projects, notes, tasks, activity } from '../data';
import ProjectCard from '../components/projectCard';
import NoteCard from '../components/NoteCard';
import { GrNotes } from 'react-icons/gr';
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { CiStar } from "react-icons/ci";

const Home = () => {
  const [isChecked, setisChecked] = useState({});

  const toggleCheck = (id) => {
    setisChecked((prev) => ({
      ...prev, [id]: !prev[id]
    }))
  };

  const [cards, setCards] = useState(projects);
  const [draggingCardId, setDraggingCardId] = useState(null);

  const handleDragStart = (e, id) => {
    setDraggingCardId(id);
  };

  const handleDragOver = (e, id) => {
    e.preventDefault();
    if (id === draggingCardId) return;

    const draggingIndex = cards.findIndex(card => card.id === draggingCardId);
    const overIndex = cards.findIndex(card => card.id === id);

    const updatedCards = [...cards];
    const [draggedCard] = updatedCards.splice(draggingIndex, 1);
    updatedCards.splice(overIndex, 0, draggedCard);

    setCards(updatedCards);
  };

  const handleDrop = () => {
    setDraggingCardId(null);
  };

  return (
    <div className='page'>
      <div className="flex w-full items-start gap-3 flex-col md:flex-row">
        <section className="md:flex-4 p-2 w-full">

          <div className="mb-5 border border-slate-300 rounded-lg bg-slate-50 p-2 shadow-md dark:bg-slate-900 dark:border-slate-700">
            <h2 className='flex items-center gap-2 text-lg font-semibold font-ubuntu text-gray-700 dark:text-slate-200'>
              <BsFolderFill className='text-xl' />
              <span>My Projects</span>
            </h2>

            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-3">
              {cards.map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                  onDragOver={(e) => handleDragOver(e, task.id)}
                  onDrop={handleDrop}
                  className={`active:cursor-grabbing shadow rounded-md cursor-grab ${draggingCardId === task.id ? "opacity-75 scale-95" : "opacity-100 scale-100"}`}
                >
                  <ProjectCard item={task} />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5 border border-slate-300 rounded-lg bg-slate-50 p-2 shadow-md dark:bg-slate-900 dark:border-slate-700">
            <h2 className='flex items-center gap-2 text-lg font-semibold font-ubuntu text-gray-700 dark:text-slate-200'>
              <GrNotes className='text-xl' />
              <span>My Notes</span>
            </h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {notes.slice(0, 4).map((task, index) => (
                <NoteCard 
                   item={task} 
                   key={index} 
                   image={false} 
                />
              ))}
            </div>
          </div>

        </section>
        <section className="md:flex-2 p-2 w-full">
          <div className="w-full flex gap-3 md:flex-col sm:flex-row flex-col">

            <div className="border w-full border-slate-300 rounded-lg bg-slate-50 p-2 shadow-md dark:bg-slate-900 dark:border-slate-700">

              <h2 className='flex items-center gap-2 text-lg font-semibold font-ubuntu text-gray-700 dark:text-slate-200'>
                <MdOutlineTaskAlt className='text-xl' />
                <span>My tasks</span>
              </h2>

              <div className="grid gap-1 mt-3">
                {tasks.map((item) => (
                  <div
                    key={item.id}
                    className={`w-full flex items-center justify-between p-1.5 px-3 rounded-md cursor-pointer transition duration-200 hover:bg-blue-100 dark:hover:bg-blue-950 ${isChecked[item.id] ? "bg-purple-300 dark:bg-blue-900" : ""}`}
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="task"
                        id="task"
                        checked={!!isChecked[item.id]}
                        className='size-4 accent-purple-500'
                        onChange={() => toggleCheck(item.id)}
                      />
                      <div className="ml-3">
                        <p className="text-sm font-semibold font-ubuntu">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.duration}</p>
                      </div>
                    </div>
                    <div>
                      <button className='text-xl'>
                        <CiStar />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border w-full border-slate-300 rounded-lg md:mt-5 bg-slate-50 p-2 shadow-md dark:bg-slate-900 dark:border-slate-700">

              <h2 className='flex items-center gap-2 text-lg font-semibold font-ubuntu text-gray-700 dark:text-slate-200'>
                <MdAccessTime className='text-xl' />
                <span>Rcent activity</span>
              </h2>

              <div className="mt-3 grid gap-1">
                {activity.map((user, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-200 py-1.5 px-3 rounded-md"
                  >
                    <div className="flex items-center">
                      <img
                        src={user.image}
                        alt={user.user}
                        className='size-9 object-cover rounded-full'
                      />
                      <div className="ml-2">
                        <p className="text-base font-medium text-gray-600 dark:text-slate-100 capitalize font-ubuntu">
                          {user.user}
                        </p>
                        <p className="text-sm text-gray-500">
                          {user.position}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-green-500">
                      {user.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}

export default Home;