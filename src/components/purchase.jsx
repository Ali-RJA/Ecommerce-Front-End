import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./purchase.css";

const Purchase = () => {
  const [order, setOrder] = useState({
    buyQuantity: [],
    credit_card_number: "",
    card_holder_name: "",
    address1: "",
    address2: "",
    expir_date: "",
    cvCode: "",
    city: "",
    state: "",
    zip: "",
  });

  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/urban-threads/items?pageNumber=0&sizeOfPage=100")
      .then(response => response.json())
      .then(data => {
        // Assuming that the items are in the `content` array of the pageable JSON response
        const itemList = data.content || [];
        setItems(itemList);
        setOrder(prevOrder => ({
          ...prevOrder,
          // Set the buyQuantity array length to match the number of items
          buyQuantity: new Array(itemList.length).fill(0),
        }));
      });

    // Clean-up function not needed if you're not setting up any subscriptions or timers
  }, []); // Dependency array is empty, meaning this effect runs once on mount

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/purchase/paymentEntry", { state: { order: order } });
    console.log("order: ", order);
  };

  return (
    <div className="container bg-beige">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {items.map((item, index) => (
            <div className="product-item col-md-4" key={item.id}>
              <img
                // Use the first image from the images array, if available
                src={item.images?.[0] || "src/assets/placeholder.jpg"} // replace with placeholder if no image is available
                alt={item.itemName}
                className="img-fluid"
              />
              <h5>{item.itemName}</h5>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Stock: {item.stockQuantity}</p>
              <input
                type="number"
                min="0"
                max={item.stockQuantity}
                required
                value={order.buyQuantity[index]}
                onChange={(e) => {
                  const newBuyQuantity = [...order.buyQuantity];
                  newBuyQuantity[index] = parseInt(e.target.value, 10);
                  setOrder({ ...order, buyQuantity: newBuyQuantity });
                }}
              />
            </div>
          ))}
        </div>
        <button type="submit" className="custom-btn mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Purchase;
