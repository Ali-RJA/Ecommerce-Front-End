import "./home.css";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="home-container container mt-5 bg-beige">
      <img src={logo} alt="Logo" className="logo img-thumbnail w-40 mb-5" />

      <h1 className="display-3 text-center mb-4">Urban Threads</h1>

      <div className="row">
        <div className="col-12">
          <h2 className="display-6 mb-3">Our Ethos</h2>
          <p className="lead mb-5">
            Founded on the principles of excellence and elegance, Urban Threads
            is more than just a brand - it’s a lifestyle. In the ever-evolving
            world of fashion, we stand as the epitome of sophistication and
            cutting-edge style. With an unyielding commitment to quality and
            innovation, we merge global trends with local flavors, creating an
            unrivaled blend of uniqueness.
          </p>
        </div>

        <div className="col-12">
          <h2 className="display-6 mb-3">The Urban Threads Difference</h2>
          <p className="lead mb-5">
            Every piece at Urban Threads is meticulously crafted, bearing in
            mind the diverse sartorial preferences of our discerning clientele.
            Our designs are timeless, transcending fleeting trends and radiating
            a charm that's both vintage and contemporary. We understand that
            fashion is an extension of one's personality, and our collection
            resonates with this ethos, offering something special for every
            individual.
          </p>
        </div>

        <div className="col-12">
          <h2 className="display-6 mb-3">Sustainability: A Stitch At A Time</h2>
          <p className="lead mb-5">
            In an era where sustainability is more than a buzzword, we're at the
            forefront of eco-conscious fashion. We believe in the power of
            sustainable and ethically sourced materials, ensuring a lesser
            environmental footprint without compromising on quality.
          </p>
        </div>

        <div className="col-12">
          <h2 className="display-6 mb-3">A Message From The Heart</h2>
          <p className="lead mb-5">
            To our esteemed clientele - your faith in Urban Threads empowers us.
            As we journey together in the world of fashion, know that our
            commitment to you is unwavering. We promise to continue pushing the
            boundaries, delivering not just clothes, but a legacy of style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
