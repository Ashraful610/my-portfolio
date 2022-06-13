import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
         <div className='banner'>
             <div className='photo'>
                 <img className='img' src="https://i.ibb.co/mqv1mD9/output-onlinegiftools.gif" alt="" />
             </div>
              <div className='banner-details'>
                    <h2 className='text-2xl'>Hi , I am Ashraful  Alam</h2>
                    <h2  className='text-2xl'> Web Developer</h2>
                    <p className='pe-4 text-2xl'>I am a web developer fresher. I am Front End Specialist. I am projecting with html, css, bootstrap, tailwind css, javascript, react, react router.</p>
                    <div>
                         <button className="resume-btn">
                             <a href="https://i.ibb.co/8McYP0W/Resume-3-1.jpg" download alt="" className="lg:text-2xl text-xl">
                             My  Resume
                             </a>
                        </button>
                    </div>
              </div>
         </div>
    );
};

export default Banner;