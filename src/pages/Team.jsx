import React from 'react';
import TeamCard from '../components/TeamCard';
import { teamMember } from '../data';
import { GrGroup } from 'react-icons/gr';

const Team = () => {
  return (
    <div className='page'>
      <div className="p-2 mt-3">
        <div className="mb-4">
          <h3 className="text-2xl font-ubuntu font-semibold text-black dark:text-white flex items-center gap-3">
            <GrGroup className='text-xl' />
            Team Members
          </h3>
        </div>

        <div className="grid p-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          {teamMember.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              image={member.image}
              position={member.position}
              about={member.about}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team;