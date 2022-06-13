import React from 'react';
import toast from 'react-hot-toast';
import './Contact.css'

const Contact = () => {
    return (
    <div className="hero min-h-screen">
           <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center text-white lg:w-3/5 p-10 lg:text-left">
                    <h1 className="text-5xl font-bold">
                        Contact <span className="information"> Me! </span>
                    </h1>
                    <p className="py-6">I am a web developer fresher. I am Front End Specialist. I am projecting with html, css, bootstrap, tailwind css, javascript, react, react router.</p>
                </div>
              <div className="card flex-shrink-0 lg:w-2/5 shadow-2xl ">
               <div className="card-body">
                 <div className="container ">
                    <form target="_blank" action="https://formsubmit.co/25257959595e435e5e90f88aa063c91a " method="POST">
                        <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <label className='text-white'> Name  </label>
                                <input type="text" name="name" className="form-control input" placeholder="Full Name" required />
                            </div>
                            <div className="col">
                                    <label className='text-white'>   Email </label>
                                <input type="email" name="email" className="form-control input" placeholder="Email Address" required />
                            </div>
                        </div>
                        </div>
                           <label className='text-white'>Message</label>
                             <textarea placeholder="Your Message" className="form-control text-area my-5" name="message" rows="6" required>
                             </textarea>
                        <button type="submit" className=" btn-lg submit w-5/6 ">
                            Submit 
                        </button>
                     </form>
                  </div>
                </div>
             </div>
         </div>
      </div>
    );
};

export default Contact;