import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
         <div className='banner'>
             <div className='photo'>
                 <img className='img' src="https://i.ibb.co/FKVkX32/photo-2-removebg-preview.png" alt="" />
             </div>
              <div className='banner-details'>
                    <h2>Hi , I am</h2>
                    <h2>Ashraful  Alam</h2>
                    <h2>Web Developer</h2>
                    <p className='pe-4'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <div>
                         <button className="resume-btn">
                             <a href="https://i.ibb.co/8McYP0W/Resume-3-1.jpg" download alt="">
                             My Resume
                             </a>
                        </button>
                    </div>
              </div>
         </div>
    );
};

export default Banner;