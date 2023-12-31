import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./cart.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

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


  const handleCheckout = () => {
    const savedOrderDTO = JSON.parse(localStorage.getItem('orderDTO') || '{}');
    navigate("/purchase/paymentEntry", { state: { orderDTO: savedOrderDTO } });
  };


  return (
    <div className="shopping-cart">
      {cartItems.length > 0 ? (
        cartItems.map(item => (
        <div key={item.id} className="product-item">
          <div className="product-image">
            <img src={item.imageUrl} alt={item.itemName} className="img-fluid" />
          </div>
          <div className="product-details">
            <p className="product-name">{item.itemName}</p>
            <p className="product-quantity">Quantity: {item.quantity}</p>
            <p className="product-price">Price: ${item.price.toFixed(2)}</p>
          </div>
        </div>

        ))

      ) : (
        <div>No items in the cart</div>
      )}
      <button onClick={handleCheckout} className="custom-btn mt-4">Checkout</button>
    </div>
  );
};

export default ShoppingCart;
