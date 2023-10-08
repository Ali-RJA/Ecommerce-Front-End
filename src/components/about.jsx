import React from 'react';
import './About.css'; // Assuming your CSS file is named "About.css" and located in the same directory

const About = () => {

  return (
    <div className="container">
      <h1>About Us</h1>

      <section className="employee">
          <img src="src\assets\Xinnan_Headshot.jpg" alt="CEO" width="250" height="300"/>
          <div className="description">
              <h2>CEO</h2>
              <p>Xinnan Miao is the Chief Executive Officer (CEO) of our e-commerce company.
                   Since stepping into the role, she has brought a fresh perspective, steering
                    the company with a steady hand.   As a Computer Science and Engineering student
                     at The Ohio State University, Xinnan blends her technical knowledge with business acumen,
                      ensuring the company stays relevant in a rapidly changing digital landscape.
                         Under her guidance, the company looks forward to steady growth.</p>
          </div>
      </section>

      <section className="employee">
          <img src="src\assets\Ali_Headshot.jpg" alt="CTO" width="250" height="250"/>
          <div className="description">
              <h2>CTO</h2>
              <p>Ali Alabbasi serves as the Chief Technology Officer (CTO) of our esteemed e-commerce company.
                 Holding the position for the past 2 weeks, Ali plays a pivotal role in overseeing the technological 
                 direction of the company, implementing the latest technological advancements, and ensuring the platform
                  remains user-friendly and secure. Currently pursuing his studies at The Ohio State University, Ali is
                   ardently working towards carving a niche for himself in the world of e-commerce as a CTO.</p>
          </div>
      </section>

      <section className="employee">
        <img src="src\assets\Ruoke_Headshot.jpg" alt="President" width="220" height="300"/>
          <div className="description">
              <h2>President</h2>
              <p>Ruoke Zhang is the President of our company. Since assuming the position, she has brought innovative ideas
                 and forward-thinking strategies to the forefront. As a Computer Science and Engineering student at
                  The Ohio State University, Ruoke integrates her profound technical expertise with her leadership abilities,
                   ensuring the company remains cutting-edge in our dynamic industry. Under her direction, the company is set
                    on a path of sustained success and expansion.</p>
          </div>
      </section>
    </div>
  );
};

export default About;
