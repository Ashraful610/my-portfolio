import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about'>
            <div className='profile-img'>
                <img src="https://i.ibb.co/cyzZVtb/Blue-Grey-Modern-Business-Linktree-Profile-Image.gif" className='my-img' alt="" />
            </div>
            <h2 className='lg:text-3xl lg:text-2xl text-xl text-center text-white lg:mt-10 mt-10 mb-5'>
                         My <span className='information'>Information</span>
             </h2>
            <div className="my-details ">
                   <div className='lg:w-2/4 w-4/4 shadow-2xl lg:m-5 mb-4'>
                        <h2 className='lg:text-3xl lg:text-2xl text-xl text-center text-white'>
                          <span className='information'> WHO </span>   AM I
                        </h2>
                        <p className='text-white text-xl lg:p-4'>
                           Assalamualaikum, my name is Mohammad Ashraful Alam. I am a student. I am studying Computer Science and Engineering at Brahmanbaria Polytechnic Institute.
                        </p>
                   </div>
                   <div className='lg:w-2/4 w-4/4 mb-4 lg:m-5 shadow-2xl'>
                        <h2 className='lg:text-3xl lg:text-2xl text-xl text-center text-white'>
                            <span className='information'> WHAT </span> DO I DO ?
                        </h2>
                        <p className='text-white text-xl lg:p-4'>
                             I am a web developer fresher. I am Front End Specialist. 
                             I am projecting with html, css, bootstrap, tailwind css, javascript, react, react router.
                        </p>
                   </div>

            </div>
            <div>
                <h2 className="text-white text-center lg:text-3xl lg:text-2xl text-xl">
                         MY <span className="information">SKILLS</span>   
                 </h2>
                 <div className='skills my-4'>
                    <div className='lg:w-2/4 w-4/4 my-3'>
                        <h2 className='text-white text-center lg:text-3xl lg:text-2xl text-xl'>
                            <span className="information">Technical </span> Skills
                        </h2>
                        <div>
                            <div>
                                <div className="technology">
                                    <h2 className="text-white lg:text-2xl text-xl ">HTML </h2> 
                                    <h2 className="text-white lg:text-2xl text-xl lg:ml-80 ml-44">
                                        85%
                                    </h2>
                                </div>
                                  <progress className="progress progress-danger  w-full" value="85" max="100"></progress>
                            </div>
                            
                            <div>
                                <div className="technology">
                                    <h2 className="text-white lg:text-2xl text-xl">CSS </h2> 
                                    <h2 className="text-white lg:text-2xl text-xl lg:ml-80 ml-44">80%</h2>
                                </div>
                                  <progress className="progress progress-danger  w-full" value="80" max="100"></progress>
                            </div>
                            
                            <div>
                                <div className="technology">
                                    <h2 className="text-white lg:text-2xl text-xl ">
                                        Bootstrap 
                                    </h2> 
                                    <h2 className="text-white lg:text-2xl text-xl lg:ml-80 ml-36">90%</h2>
                                </div>
                                  <progress className="progress progress-danger  w-full" value="90" max="100"></progress>
                            </div>
                            <div>
                                <div className="technology">
                                    <h2 className="text-white lg:text-2xl text-xl ">
                                        Javascript 
                                    </h2> 
                                    <h2 className="text-white lg:text-2xl text-xl lg:ml-72 ml-36">
                                        85%
                                    </h2>
                                </div>
                                  <progress className="progress progress-danger  w-full" value="85" max="100"></progress>
                            </div>
                            
                            <div>
                                <div className="technology">
                                    <h2 className="text-white lg:text-2xl text-xl ">
                                        React JS
                                     </h2> 
                                    <h2 className="text-white lg:text-2xl text-xl lg:ml-72 ml-36">
                                        80% 
                                    </h2>
                                </div>
                                  <progress className="progress progress-danger  w-full" value="80" max="100"></progress>
                            </div>
                            
                            <div>
                                <div className="technology">
                                    <h2 className="text-white lg:text-2xl text-xl ">
                                        React Router
                                     </h2> 
                                    <h2 className="text-white lg:text-2xl text-xl lg:ml-56 ml-24">
                                        75%
                                    </h2>
                                </div>
                                  <progress className="progress progress-danger  w-full" value="75" max="100"></progress>
                            </div>
                            <div>
                                <div className="technology">
                                    <h2 className="text-white lg:text-2xl text-xl ">
                                        Firebase
                                     </h2> 
                                    <h2 className="text-white lg:text-2xl text-xl lg:ml-48 ml-20">
                                        60%
                                    </h2>
                                </div>
                                  <progress className="progress progress-danger  w-full" value="60" max="100"></progress>
                            </div>
                            <div>
                                <div className="technology">
                                    <h2 className="text-white lg:text-2xl text-xl ">
                                        Node JS 
                                    </h2> 
                                    <h2 className="text-white lg:text-2xl text-xl lg:ml-36 ml-12">
                                        50%
                                    </h2>
                                </div>
                                  <progress className="progress progress-danger  w-full" value="50" max="100"></progress>
                            </div>
                            <div>
                                <div className="technology">
                                    <h2 className="text-white lg:text-2xl text-xl ">
                                        MongoDB
                                    </h2> 
                                    <h2 className="text-white lg:text-2xl text-xl lg:ml-28 ml-8">50%</h2>
                                </div>
                                  <progress className="progress progress-danger  w-full" value="50" max="100"></progress>
                            </div>
                            
                        </div> 
                    </div>
                    <div className='lg:w-2/4 w-4/4 my-3'>
                        <h2 className='text-white text-center lg:text-3xl lg:text-2xl text-xl'>
                            <span className="information">Professional </span> Skills
                        </h2>
                        <div className='professional'>
                            <div className='work'>
                                <div className='lg:w-2/4 w-4/4 lg:p-4 p-2'>
                                    <div className="radial-progress progress-1" >
                                        90%
                                    </div>
                                    <h2 className='text-white text-center'>
                                          Hard Work    
                                    </h2>
                                </div>
                                <div className='lg:w-2/4 w-4/4 lg:p-4 p-2'>
                                    <div className="radial-progress progress-2" >
                                        80%
                                    </div>
                                    <h2 className='text-white text-center'>  
                                         Team Work    
                                    </h2>
                                </div>

                            </div>
                            <div className='work'>
                                <div className='lg:w-2/4 w-4/4 lg:p-4 p-2'>
                                    <div className="radial-progress progress-1" >
                                        90%
                                    </div>
                                    <h2 className='text-white text-center'> 
                                        Ability To Learn  
                                    </h2>
                                </div>
                                <div className='lg:w-2/4 w-4/4 lg:p-4 p-2'>
                                    <div className="radial-progress progress-2" >
                                        80%
                                    </div>
                                    <h2 className='text-white text-center'> 
                                        Time Management   
                                     </h2>
                                </div>

                            </div>
                            
                           
                        </div>

                    </div>
                 </div>
            </div>
        </div>
    );
};

export default AboutMe;