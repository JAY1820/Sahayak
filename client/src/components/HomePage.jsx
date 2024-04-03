import React, { useState } from 'react';
import './HomePage.css';
import Home1 from '../assets/index1.png';
import Home2 from '../assets/index2.png';
import Aboutus from '../assets/about-us.png';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Home1, Home2];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="carousel">
        <button className="carousel-button" onClick={prevSlide}>Prev</button>
        <img className="carousel-image" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <button className="carousel-button" onClick={nextSlide}>Next</button>
      </div>

      <section className="about-us">
        <div className="about">
          <img src={Aboutus} className="pic" alt="About Us" />
          <div className="text">
            <h2>About Us</h2>
            <h5>Website  <span>Developer</span></h5>

            <p>Shayak project is a The Ultimate Ally for Collaboration, Living, and Management.It is a platform designed with the user in mind, aiming to provide assistance and support in a seamless manner. 
                The project is driven by a team of skilled designers and developers who share a common vision - to make a difference through technology.</p>
            <br />
            <p>We are a team of dedicated developers and designers working on the Sahayak project. Our aim is to make your life easier by providing 
                an intuitive and user-friendly.</p>

            <div className="data">
              <a href="login" className="joinus">Join US</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
