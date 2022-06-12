import React from 'react';
import './Project.css'

const Project = () => {
    return (
        <div className=''>
            <h3 className="text-center lg:text-3xl text-xl font-bold my-10">My Projects</h3>
            <div className=" projects p-3">
               <div class="card card-compact  bg-base-100 shadow-xl mx-5 ">
                 <figure>
                     <img src="https://i.ibb.co/jgqwmXq/2022-06-09-3-380x350.png" alt="Shoes" />
                  </figure>
                   <div class="card-body">
                      <h2 class="card-title">Project Name : Fruits Stock</h2>
                      <p> <span className='project'>Project Description :</span> Assalamualaikum, our website is a site of fruit stocking. Our website discusses in detail the storage of different types of fruits - such as price, quantity, seller, description, picture, name, etc. You can choose any of our fruits and we have some fruit stocks and discussed how we produce.</p>
                        <div class="card-actions justify-start">
                            <button class="btn btn-primary">
                                <a href="https://assignment-client-site-11.web.app/" alt="">
                                Visit my site
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
               <div class="card card-compact  bg-base-100 shadow-xl mx-3 ">
                 <figure>
                     <img src="https://i.ibb.co/fqnzWmJ/2022-06-09-5-1-380x350.png" alt="Shoes" />
                  </figure>
                   <div class="card-body">
                      <h2 class="card-title">Project Name :World Class Photography</h2>
                      <p> <span className='project'>Project Description :</span> Assalamualaikum, our website is a site of fruit stocking. Our website discusses in detail the storage of different types of fruits - such as price, quantity, seller, description, picture, name, etc. You can choose any of our fruits and we have some fruit stocks and discussed how we produce.</p>
                        <div class="card-actions justify-start">
                            <button class="btn btn-primary">
                            <a href="https://assignment-firebase-10.web.app/" alt="">
                                Visit my site
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
               <div class="card card-compact   bg-base-100 shadow-xl mx-3 ">
                 <figure>
                     <img src="https://i.ibb.co/nCyYRZw/2022-06-09-7-380x350.png" alt="Shoes" />
                  </figure>
                   <div class="card-body">
                      <h2 class="card-title">Project Name : Best Phone Collection</h2>
                      <p> <span className='project'>Project Description :</span> Assalamualaikum, our website is a site of fruit stocking. Our website discusses in detail the storage of different types of fruits - such as price, quantity, seller, description, picture, name, etc. You can choose any of our fruits and we have some fruit stocks and discussed how we produce.</p>
                        <div class="card-actions justify-start">
                            <button class="btn btn-primary">
                                <a href="https://ashraful-assignment-6.netlify.app/" alt="">Visit my site</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;