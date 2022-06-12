import React from 'react';
import './Project.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Project = ({project}) => {
    const {name , description ,  img1 ,_id } = project;
    const navigate = useNavigate()

    const handleProjectDetails = id => {
        navigate(`/project/${id}`)
    }
    return (
        <div className="card card-compact  bg-base-100 shadow-xl mx-3 mb-5 ">
        <figure>
            <img src={img1} alt="Shoes" />
         </figure>
          <div className="card-body">
             <h2 className="card-title">Project Name :{name}</h2>
             <p> <span className='project'>Project Description :</span>
               {description}
             </p>
               <div className="card-actions justify-start">
                   <button className="btn btn-outline btn-primary"
                    onClick={()=> handleProjectDetails(_id)}
                   >
                         Details
                   </button>
               </div>
           </div>
       </div>
    );
};

export default Project;