import React, { useEffect, useState } from 'react';
import './ProjectDetails.css'
import {useParams} from 'react-router-dom';

const ProjectDetails = () => {
    const {id} = useParams()
    const [project ,setProject] = useState()
    const {name , description , img1 , img2 ,img3 ,liveSiteLink,codeLink , serverSiteLink ,tools} = project || {}

    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${id}`)
        .then(res => res.json())
        .then(data => setProject(data))
    },[])
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-5'> {name}</h2>
           <div className='project-photo'>
               <img src={img1} alt=""></img>
               <img src={img2} alt=""></img>
               <img src={img3} alt=""></img>
           </div>
            <div className='project-details'>
                   <h2 className='text-4xl font-bold'>Project Name : {name}</h2>
                   <h2 className='text-xl '> <span className='font-bold'> Description :  </span>     {description}</h2>
                    {
                        liveSiteLink && <a href={liveSiteLink} alt="" className="text-2xl font-bold">Live site Link : {liveSiteLink}</a>
                    }
                    {
                        codeLink && <a href={codeLink} alt="" className="text-2xl font-bold">Code Link : {codeLink}</a>
                    }
                    {
                        serverSiteLink && <a href={serverSiteLink} alt="" className="text-2xl font-bold">Server Site Link : {serverSiteLink}</a>
                    }
            </div>
        </div>
    );
};

export default ProjectDetails;