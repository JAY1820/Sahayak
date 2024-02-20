import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://i.postimg.cc/526GKmd9/Final-Index-1.png" alt="Slide 1" width="800" height="300" />
        </div>
        <div>
          <img src="https://i.postimg.cc/Sx68hBpg/Final-Index-2-1.png" alt="Slide 2" width="800" height="300" />
        </div>
      </Carousel>

      <section className="about-us">
        <div className="about">
          <img src="https://i.postimg.cc/6qsPrQXw/about-us.png" className="pic" alt="About Us" width="800" height="400" />
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
