import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from './Navbar';
import SampleFooter from './footer';
import './Contact.css';

const ShippingEntry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderDTO, setOrderDTO] = useState(location.state?.orderDTO);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDTO((prevOrderDTO) => ({
      ...prevOrderDTO,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/purchase/viewOrder', { state: { orderDTO } });
  };

  return (
    <div className="container bg-beige">
      <NavBar />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="card_holder_name"
            value={orderDTO.card_holder_name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Address Line 1:
          <input
            type="text"
            name="address1"
            value={orderDTO.address1}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Address Line 2:
          <input
            type="text"
            name="address2"
            value={orderDTO.address2}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={orderDTO.city}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          State:
          <input
            type="text"
            name="state"
            value={orderDTO.state}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Zip:
          <input
            type="text"
            name="zip"
            value={orderDTO.zip}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" className="custom-btn">
          Continue to View Order
        </button>
      </form>
      <SampleFooter />
    </div>
  );
};

export default ShippingEntry;

