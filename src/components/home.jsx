import React from "react";
import './home.css';
import logo from '../assets/logo.png';


const Home = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="Your Logo" className="logo"/>

      <h1>Urban Threads</h1>
      
      <h2>Our Ethos</h2>
      <p>Founded on the principles of excellence and elegance, Urban Threads is more than just a brand - it’s a lifestyle. In the ever-evolving world of fashion, we stand as the epitome of sophistication and cutting-edge style. With an unyielding commitment to quality and innovation, we merge global trends with local flavors, creating an unrivaled blend of uniqueness.</p>
      
      <h2>The Urban Threads Difference</h2>
      <p>Every piece at Urban Threads is meticulously crafted, bearing in mind the diverse sartorial preferences of our discerning clientele. Our designs are timeless, transcending fleeting trends and radiating a charm that's both vintage and contemporary. We understand that fashion is an extension of one's personality, and our collection resonates with this ethos, offering something special for every individual.</p>

      <h2>Sustainability: A Stitch At A Time</h2>
      <p>In an era where sustainability is more than a buzzword, we're at the forefront of eco-conscious fashion. We believe in the power of sustainable and ethically sourced materials, ensuring a lesser environmental footprint without compromising on quality.</p>
      
      <h2>A Message From The Heart</h2>
      <p>To our esteemed clientele - your faith in Urban Threads empowers us. As we journey together in the world of fashion, know that our commitment to you is unwavering. We promise to continue pushing the boundaries, delivering not just clothes, but a legacy of style.</p>
    </div>
  );
};

export default Home;

