import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from './Navbar';
import SampleFooter from './footer';
import './Contact.css';

const PaymentEntry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderDTO, setOrderDTO] = useState(location.state?.orderDTO || {});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDTO(prevOrderDTO => ({
      ...prevOrderDTO,
      [name]: value,
    }));
  };

  const validateCreditCardNumber = (number) => {
    const regex = /^\d{16}$/;
    return regex.test(number);
  };

  const validateCVV = (cvv) => {
    const regex = /^\d{3,4}$/;
    return regex.test(cvv);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateCreditCardNumber(orderDTO.credit_card_number)) {
      setError("Invalid Credit Card Number");
      return;
    }
    if (!validateCVV(orderDTO.cvCode)) {
      setError("Invalid CVV Code");
      return;
    }
    navigate("/purchase/shippingEntry", { state: { orderDTO } });
  };

  // Error handling for accessing properties of orderDTO directly
  const getSafe = (fn, defaultValue) => {
    try {
      return fn();
    } catch (e) {
      return defaultValue;
    }
  };

  return (
    <div className="container bg-beige">
      <NavBar />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>Product 1: {getSafe(() => orderDTO.buyQuantity[0], 0)}</div>
      <div>Product 2: {getSafe(() => orderDTO.buyQuantity[1], 0)}</div>
      <div>Product 3: {getSafe(() => orderDTO.buyQuantity[2], 0)}</div>
      <div>Product 4: {getSafe(() => orderDTO.buyQuantity[3], 0)}</div>
      <div>Product 5: {getSafe(() => orderDTO.buyQuantity[4], 0)}</div>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type="number"
            name="credit_card_number"
            value={getSafe(() => orderDTO.credit_card_number, "")}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Expiration Date:
          <input
            type="text"
            name="expir_date"
            value={getSafe(() => orderDTO.expir_date, "")}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          CVV Code:
          <input
            type="number"
            name="cvCode"
            value={getSafe(() => orderDTO.cvCode, "")}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Card Holder Name:
          <input
            type="text"
            name="card_holder_name"
            value={getSafe(() => orderDTO.card_holder_name, "")}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" className="custom-btn">Continue to Shipping Information</button>
      </form>
      <SampleFooter />
    </div>
  );
};

export default PaymentEntry;
