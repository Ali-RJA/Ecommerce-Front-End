import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from './Navbar';
import SampleFooter from './footer';

const PaymentEntry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(location.state.order);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
    setError("");
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
    if (!validateCreditCardNumber(order.credit_card_number)) {
      setError("Invalid Credit Card Number");
    } else if (!validateCVV(order.cvCode)) {
      setError("Invalid CVV Code");
    } else {
      navigate("/purchase/shippingEntry", { state: { order: order } });
      console.log("order: ", order);
    }
  };

  return (
    <div>
      <h1>Payment Entry</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      Product 1: {order.buyQuantity[0]}
      <br />
      Product 2: {order.buyQuantity[1]}
      <br />
      Product 3: {order.buyQuantity[2]}
      <br />
      Product 4: {order.buyQuantity[3]}
      <br />
      Product 5: {order.buyQuantity[4]}
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type="number"
            name="credit_card_number"
            value={order.credit_card_number}
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
            value={order.expir_date}
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
            value={order.cvCode}
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
            value={order.card_holder_name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Continue to Shipping Information</button>
      </form>
    </div>
  );
};

export default PaymentEntry;
