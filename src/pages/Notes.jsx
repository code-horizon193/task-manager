import React from 'react';
import { notes } from '../data';
import NoteCard from '../components/NoteCard';
const Notes = () => {
  return (
    <div className='page'>
      <div className="p-2">
        <div className="font-ubuntu text-2xl font-bold mb-4">
          My Notes
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {notes.map((note, idx) => (
            <NoteCard
              item={note}
              key={idx}
              image={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notes;