import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import NavBar from './Navbar';
import SampleFooter from './footer';
import './Contact.css';

const ViewOrder = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderDTO } = location.state;
    const [cartItems, setCartItems] = useState([]);

    if (!orderDTO) {
        return <div>Order not found or incomplete</div>;
    }

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


    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to the next page, passing updated orderDTO object
        navigate("/purchase/viewConfirmation", { state: { orderDTO } });
    };

    return (
        <div className="container bg-beige">
            <h2>Order Details</h2>
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
            <p>Card Number: **** **** **** {orderDTO.cardNumber.slice(-4)}</p>
            <h3>Shipping Details:</h3>
            <p>First Name: {orderDTO.firstName}</p>
            <p>Last Name: {orderDTO.lastName}</p>
            <p>Email: {orderDTO.email}</p>
            <p>Country: {orderDTO.country}</p>
            <p>State: {orderDTO.state}</p>
            <p>City: {orderDTO.city}</p>
            <p>Street: {orderDTO.street}</p>
            <p>Zip: {orderDTO.zip}</p>

            <form onSubmit={handleSubmit}>
                <button type="submit" className="custom-btn">Next Page</button>
            </form>
        </div>
    );
};

export default ViewOrder;

