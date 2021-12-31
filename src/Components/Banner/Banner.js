import React from 'react';
import './Banner.css';

import { Carousel } from 'react-bootstrap';
import banner1 from  '../../Images/image1.jpg'
import banner2 from '../../Images/image2.jpg'
import banner3 from '../../Images/image3.jpg'



const Banner = () => {
    return (
       <>
       
        <Carousel fade >
    
    <Carousel.Item  className="banner">
  
      
      <img 
        className="d-block w-100 "
        src={banner2}
        alt="First slide"
      />
      <div className="overlay">
      <Carousel.Caption className="element" >
        <h3>Welcome to Hero Rider</h3>
        <p>‘Hero Rider’ is a ride sharing startup.What’s the best training? Maybe a better question: What’s the safest training?That's right! We are one of the only Driving Schools the State of Michigan trusts to train people to be Driver Ed instructors.</p>
        <button className='btn'>Know more</button>
      </Carousel.Caption>
      </div>
    
      
    </Carousel.Item>
    <Carousel.Item className="banner">
      <img
        className="d-block w-100"
        src={banner1}
        alt="Second slide"
      />
  
     <div className="overlay">
     <Carousel.Caption className="element">
       
        <h3>Learn Driving</h3>
        <p>Hero Rider is more than just a driving school. We believe in the power of community. That’s why we make a point to build relationships and create programs that will impact the community you live in for many years to come to build a better, safer place together.</p>
        <button className='btn'>Know more</button>
      </Carousel.Caption>
     </div>
    </Carousel.Item>
    <Carousel.Item className="banner">
      <img
        className="d-block w-100"
        src={banner3}
        alt="Third slide"
      />
  
      <div className="overlay">
      <Carousel.Caption className="element">
        <h3>Be Confident, Be a Rider</h3>
        <p>Being with Hero Rider means being on the highest earning platform! So, what are you waiting for? Join us to earn the most!If you are confident enough join us as a rider.</p>
        <button className='btn'>Know more</button>
      </Carousel.Caption>
      </div>
    </Carousel.Item>
  </Carousel>
       </>
    );
};

export default Banner;