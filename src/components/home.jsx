import "./home.css";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="home-container container">
      <img src={logo} alt="Logo" className="logo img-thumbnail w-40 mb-7" />


      <div className="row">
        <div className="col-12">
          <h2 className="display-6">Who We Are</h2>
          <p className="lead mb-5">
            Catering to fashion-forward individuals aged 18-34, we embrace all genders and celebrate diversity. Our heart beats in Ohio, reflecting the pulse of fashion trends, lifestyle, and culture. We understand the importance of ethical sourcing, sustainability, and self-expression through fashion. Our customers, from the middle to upper-middle class, value convenience and the latest trends in e-commerce shopping.
          </p>
        </div>

        <div className="col-12">
          <h2 className="display-6">Why Shop With Us?</h2>
          <ul className="lead mb-5">
            <li><strong>Exclusive Local Pioneer</strong>: Stand out with our unique styles, setting the trend in Ohio's fashion scene.</li>
            <li><strong>Cost-Effective Pricing</strong>: Enjoy high-quality fashion without the high costs. Our online presence means more savings for you.</li>
            <li><strong>Speedy Delivery</strong>: Get your fashion fix fast with our efficient local shipping.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
