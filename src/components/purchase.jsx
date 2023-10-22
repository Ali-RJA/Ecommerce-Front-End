import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";






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

  
  const[item, setItem] = useState({
      // create item with same fields as backend rest controller
      // useState(item) update here
  });

  const navigate = useNavigate();


  useEffect(() => {
     // Call rest controller api ttp://localhost:8080/urban-threads/items
  
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
          <div className="col-md-4">
            <img
              src="src\assets\tshirt1.jpg"
              alt="T shirt Image"
              className="img-fluid mb-2"
            />
            <label>Purple T-shirt</label>
            <input
              type="number"
              required
              onChange={(e) => {
                const newBuyQuantity = [...order.buyQuantity];
                newBuyQuantity[0] = e.target.value;
                setOrder({ ...order, buyQuantity: newBuyQuantity });
              }}
            />
          </div>

          <div className="col-md-4">
            <img
              src="src\assets\tshirt2.jpg"
              alt="T-shirt Image"
              className="img-fluid mb-2"
            />
            <label>White T-shirt</label>
            <input
              type="number"
              required
              onChange={(e) => {
                const newBuyQuantity = [...order.buyQuantity];
                newBuyQuantity[1] = e.target.value;
                setOrder({ ...order, buyQuantity: newBuyQuantity });
              }}
            />
          </div>

          <div className="col-md-4">
            <img
              src="src\assets\tshirt3.jpg"
              alt="Tshirt Image"
              className="img-fluid mb-2"
            />
            <label>Pink T-shirt</label>
            <input
              type="number"
              required
              onChange={(e) => {
                const newBuyQuantity = [...order.buyQuantity];
                newBuyQuantity[2] = e.target.value;
                setOrder({ ...order, buyQuantity: newBuyQuantity });
              }}
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <img
              src="src\assets\tshirt4.jpg"
              alt="T-shirt Image"
              className="img-fluid mb-2"
            />
            <label>Orange T-shirt</label>
            <input
              type="number"
              required
              onChange={(e) => {
                const newBuyQuantity = [...order.buyQuantity];
                newBuyQuantity[3] = e.target.value;
                setOrder({ ...order, buyQuantity: newBuyQuantity });
              }}
            />
          </div>

          <div className="col-md-4">
            <img
              src="src\assets\tshirt5.jpg"
              alt="T-shirt Image"
              className="img-fluid mb-2"
            />
            <label>Gret T-shirt</label>
            <input
              type="number"
              required
              onChange={(e) => {
                const newBuyQuantity = [...order.buyQuantity];
                newBuyQuantity[4] = e.target.value;
                setOrder({ ...order, buyQuantity: newBuyQuantity });
              }}
            />
          </div>
        </div>

        <button type="submit" className="custom-btn mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Purchase;
