import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <div className="container bg-beige">
      <section className="employee row justify-content-center align-items-center">
        <div className="col-md-3">
          <img
            src="src\assets\Xinnan_Headshot.jpg"
            alt="CEO"
            className="img-thumbnail mb-5 mx-auto d-block"
          />
        </div>
        <div className="col-md-5 description">
          <h3>CEO-Xinnan</h3>
          <p>
            Xinnan Miao is the Chief Executive Officer (CEO) of our e-commerce
            company. Since stepping into the role, she has brought a fresh
            perspective, steering the company with a steady hand. As a Computer
            Science and Engineering student at The Ohio State University, Xinnan
            blends her technical knowledge with business acumen, ensuring the
            company stays relevant in a rapidly changing digital landscape.
            Under her guidance, the company looks forward to steady growth.
          </p>
        </div>
      </section>

      <section className="employee row justify-content-center align-items-center">
        <div className="col-md-3">
          <img
            src="src\assets\Ali_Headshot.jpg"
            alt="CTO"
            className="img-thumbnail mb-5 mx-auto d-block"
          />
        </div>
        <div className="col-md-5 description text-center">
          <h3>CTO-Ali</h3>
          <p>
            Ali Alabbasi serves as the Chief Technology Officer (CTO) of our
            esteemed e-commerce company. Holding the position for the past 2
            weeks, Ali plays a pivotal role in overseeing the technological
            direction of the company, implementing the latest technological
            advancements, and ensuring the platform remains user-friendly and
            secure. Currently pursuing his studies at The Ohio State University,
            Ali is ardently working towards carving a niche for himself in the
            world of e-commerce as a CTO.
          </p>
        </div>
      </section>

      <section className="employee row justify-content-center align-items-center">
        <div className="col-md-3">
          <img
            src="src\assets\Ruoke_Headshot.jpg"
            alt="President"
            className="img-thumbnail mb-5 mx-auto d-block"
          />
        </div>
        <div className="col-md-5 description text-center">
          <h3>President-Ruoke</h3>
          <p>
            Ruoke Zhang is the President of our company. Since assuming the
            position, she has brought innovative ideas and forward-thinking
            strategies to the forefront. As a Computer Science and Engineering
            student at The Ohio State University, Ruoke integrates her profound
            technical expertise with her leadership abilities, ensuring the
            company remains cutting-edge in our dynamic industry. Under her
            direction, the company is set on a path of sustained success and
            expansion.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
