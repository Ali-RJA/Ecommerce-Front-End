import { useLocation, useNavigate } from "react-router-dom";
import NavBar from './Navbar';
import SampleFooter from './footer';
import './Contact.css';
import React, { useState, useEffect } from 'react';


const PaymentEntry = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [orderDTO, setOrderDTO] = useState(location.state?.orderDTO || {});
  const [error, setError] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDTO(prevOrderDTO => ({
      ...prevOrderDTO,
      [name]: value,
    }));
  };

  useEffect(() => {
    const savedOrderDTO = JSON.parse(localStorage.getItem('orderDTO') || '{}');
    if (savedOrderDTO && savedOrderDTO.itemsCountRequested) {
      fetchCartItems();
    }
  }, []);
  const fetchCartItems = () => {
    fetch(`http://localhost:8080/urban-threads/items?pageNumber=0&sizeOfPage=100`)
      .then(response => response.json())
      .then(page => {
        //console.log('API response:', page);
        const itemsArray = page.content || [];
        const savedOrderDTO = JSON.parse(localStorage.getItem('orderDTO') || '{}');
        const itemsCountRequested = savedOrderDTO.itemsCountRequested || {};
        const itemUnitPrices = savedOrderDTO.itemUnitPrices || {};

        const itemsWithDetails = itemsArray
        .filter(item => itemsCountRequested[item.id])
        .map(item => {
          const imageUrl = item.images && item.images.length > 0 ? item.images[0] :
          console.log('Item images:', item.images);
          console.log('Item quantity:', itemsCountRequested[item.id]);
          return {
            ...item,
            quantity: itemsCountRequested[item.id],
            price: itemUnitPrices[item.id] || item.price,
            imageUrl,
            name: item.itemName
          };
        });
        setCartItems(itemsWithDetails);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
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
    if (!validateCreditCardNumber(orderDTO.cardNumber)) {
      setError("Invalid Credit Card Number");
      return;
    }
    if (!validateCVV(orderDTO.cvv)) {
      setError("Invalid CVV Code");
      return;
    }
    console.log('Saving to localStorage:', orderDTO);
    localStorage.setItem('orderDTO', JSON.stringify(orderDTO));
    
    // 为了调试，检查保存后立即读取 localStorage
    const debugOrderDTO = JSON.parse(localStorage.getItem('orderDTO'));
    console.log('Saved in localStorage:', debugOrderDTO);
    
    navigate("/purchase/shippingEntry", { state: { orderDTO } });
  };

  

  // Error handling for accessing properties of orderDTO directly
  /*
  const getSafe = (fn, defaultValue) => {
    try {
      return fn();
    } catch (e) {
      return defaultValue;
    }
  };*/

  return (
    <div className="container bg-beige">
      {error && <div style={{ color: "red" }}>{error}</div>}
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id} className="product-item">  {}
            <img src={item.imageUrl} alt={item.itemName} className="img-fluid" />
            <p>{item.itemName}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))

      ) : (
        <div>No items in the cart</div>
      )}

      <h3>Payment Information:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type="number"
            name="cardNumber"
            value={orderDTO.cardNumber} 
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Expiration Date:
          <input
            type="text"
            name="expirationDate"
            value={orderDTO.expirationDate} 
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          CVV Code:
          <input
            type="number"
            name="cvv"
            value={orderDTO.cvv} 
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Card Holder Name:
          <input
            type="text"
            name="cardHolderName"
            value={orderDTO.cardHolderName} 
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" className="custom-btn">Continue to Shipping Information</button>
      </form>
    </div>
  );
};
export default PaymentEntry;
