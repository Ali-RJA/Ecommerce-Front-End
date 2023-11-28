import "./home.css";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="home-container container bg-beige">
      <img src={logo} alt="Logo" className="logo img-thumbnail w-40 mb-7" />

      <h1 className="display-3 text-center mb-4">Urban Threads</h1>

      <div className="row">
        <div className="col-12">
          <h2 className="display-6 mb-3">Discover Your Style</h2>
          <p className="lead mb-5">
            At Urban Threads, we celebrate the diversity of fashion. Our expansive collection ranges from the avant-garde to the classic, offering something for every wardrobe. Discover attire that speaks to your personality and elevates your style.
          </p>
        </div>

        <div className="col-12">
          <h2 className="display-6 mb-3">Quality Meets Variety</h2>
          <p className="lead mb-5">
            Dive into a world where quality meets variety. Each item in our collection is chosen for its craftsmanship, durability, and style. We provide a wide range of clothing options, from luxurious designer wear to affordable everyday essentials.
          </p>
        </div>

        <div className="col-12">
          <h2 className="display-6 mb-3">Sustainable Fashion for the Future</h2>
          <p className="lead mb-5">
            Join us in our commitment to sustainability. At Urban Threads, we prioritize eco-friendly materials and ethical manufacturing processes, ensuring that your fashion choices contribute to a healthier planet.
          </p>
        </div>

        <div className="col-12">
          <h2 className="display-6 mb-3">Exclusive Online Experiences</h2>
          <p className="lead mb-5">
            Experience the convenience of online shopping with exclusive features. Enjoy personalized recommendations and a seamless checkout process. We bring the latest in fashion technology to your fingertips.
          </p>
        </div>

        <div className="col-12">
          <h2 className="display-6 mb-3">Fashion Forward, Customer Centered</h2>
          <p className="lead mb-5">
            Your satisfaction is our top priority. We offer exceptional customer service, hassle-free returns, and a community platform for fashion enthusiasts. At Urban Threads, every customer is a part of our fashion family.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
