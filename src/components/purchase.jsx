import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./purchase.css";

const Purchase = () => {
  const [order, setOrder] = useState({
    buyQuantity: [0, 0, 0, 0, 0],
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

  
  const[items, setItems] = useState([{
      // create item with same fields as backend rest controller
      // useState(item) update here
      id: null,
      itemName: "",
      description: "",
      price: null,
      stockQuantity: null,
      category: ""
  }]);

  const navigate = useNavigate();


  useEffect(() => {
     // Call rest controller api http://localhost:8080/urban-threads/items
     fetch("https://89269749-088a-4bfa-9e44-fea6cc0f98f0.mock.pstmn.io/getallitems")
     .then(response => response.json())
     .then(data => {
         setItems(data);
         setOrder(prevOrder => ({ ...prevOrder, buyQuantity: new Array(data.length).fill(0) }));
     });
  
    return () => {
  
    };
  },[])


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/purchase/paymentEntry", { state: { order: order } });
    console.log("order: ", order);
  };

  // edit this so you run a loop that print html displaying all items
  return (
  
    <div className="container bg-beige">
      <form onSubmit={handleSubmit}>
      <div className="row">
          {items.map((item, index) => (
            <div className="col-md-4" key={item.id}>
              <img
                src="src\assets\tshirt5.jpg"  // Assuming your item object has an image property
                alt={item.itemName}
                className="img-fluid mb-2"
              />
              <label>{item.itemName}</label>
              <input
                type="number"
                required
                onChange={(e) => {
                  const newBuyQuantity = [...order.buyQuantity];
                  newBuyQuantity[index] = e.target.value;
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
