import React, { useState } from 'react';
import { projects } from '../data';
import funcs from '../utils/funcs';
funcs

const Projects = () => {
  const [openPage, setopenPage] = useState("projects");
  const projectsTeam = funcs.getAllTeam(projects);
  // Get 5 Random Members from the main array
  const ranImg = funcs.randomImgs(5 ,projectsTeam);
  
}

export default Projects;