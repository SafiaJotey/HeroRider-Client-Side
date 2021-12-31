import React from 'react';
import './About.css'
import about from '../../Images/about.jpg'






const About = () => {
    return (
      
        <div className='about container '>
             
            <div >
                <h1>ABOUT US</h1>
                    <div className="row d-flex justify-content-center align-items-center details">
                        <div className="col-12 col-lg-6">
                        <img src={about} alt="" />
                        </div>
                        <div className="col-12 col-lg-6 text-lg-start">
                       
                       <h3> We Offer <br></br>
                        Fast & Reliable </h3> 
                        <h2>
                        <span>
                        Driving Learning platform to learners &<br></br>
                       Job Solutions to Riders
                        </span>
                        
                        </h2>
                        <p className='text-justify'>Hero Rider has provided superior driver education in Michigan for more than 40 years under the Sears Driving School brand. Our teen and adult programs are fully certified by the State of Michigan and are lead by selected instructors that have completed rigorous training and background checks, and training is in safe, late-model vehicles.</p>
                        </div>
                        
                    </div>
            </div>
          
        
             
        </div>
    );
};

export default About;