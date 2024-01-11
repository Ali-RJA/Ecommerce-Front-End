import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
const Contact = () => {
  return (
    <div className="container bg-beige">
      <h1 className="mb-4">Contact Us</h1>

      <p className="mb-4">Have questions or feedback? Reach out to us through the form below:</p>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
        </div>

        <button type="submit" className="btn custom-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
