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
    console.log('Shipping', orderDTO);
    localStorage.setItem('orderDTO', JSON.stringify(orderDTO));
  };

  return (
    <div className="container bg-beige">
        <h1>Shipping Entry</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={orderDTO.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={orderDTO.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={orderDTO.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Stree:
          <input
            type="text"
            name="street"
            value={orderDTO.street}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={orderDTO.country}
            onChange={handleChange}
            required
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
    </div>
  );
};

export default ShippingEntry;

