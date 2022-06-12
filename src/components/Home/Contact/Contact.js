import React from 'react';
import toast from 'react-hot-toast';
import './Contact.css'

const Contact = () => {
    const handleToast  = event => {
        event.target.name.value = ''
        toast.success('Successfully send email')
    }
    return (
    <div className="hero min-h-screen my-10">
           <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center text-white lg:w-3/5 p-10 lg:text-left">
                    <h1 className="text-5xl font-bold">Contact Me!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
              <div className="card flex-shrink-0 lg:w-2/5 shadow-2xl  bg-base-100">
               <div className="card-body">
                 <div className="container ">
                    <form target="_blank" action="https://formsubmit.co/25257959595e435e5e90f88aa063c91a " method="POST">
                        <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <label> Name  </label>
                                <input type="text" name="name" className="form-control input" placeholder="Full Name" required />
                            </div>
                            <div className="col">
                                    <label>   Email </label>
                                <input type="email" name="email" className="form-control input" placeholder="Email Address" required />
                            </div>
                        </div>
                        </div>
                        <label>Message</label>
                             <textarea placeholder="Your Message" className="form-control text-area my-5" name="message" rows="6" required></textarea>
                       
                        <button type="submit" className="btn btn-lg btn-dark btn-block"
                            onClick={handleToast}>
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