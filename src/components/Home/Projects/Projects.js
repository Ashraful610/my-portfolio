import React, { useEffect, useState } from 'react';
import './Projects.css'
import { Link } from 'react-router-dom';
import Project from '../Project/Project';

const Projects = () => {
    const [projects , setProjects] = useState()

    useEffect(() =>{
        fetch('https://damp-fjord-25103.herokuapp.com/projects')
        .then(res => res.json())
        .then(data  => setProjects(data))
    },[])
    return (
        <div className='project-div' >
            <h3 className="text-center lg:text-3xl text-xl text-white font-bold">
                My  <span className="information">Project</span> 
            </h3>
            <div className=" projects">
                      {
                        projects?.map(project => <Project key={project._id} project={project}></Project>)
                      }
            </div>
        </div>
    );
};

export default Projects;