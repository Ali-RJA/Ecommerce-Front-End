import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Purchase = () => {
  const [order, setOrder] = useState({
    buyQuantity: [0,0,0,0,0],
    credit_card_number: "",
    card_holder_name: "",
    address1: "",
    address2: "",
    expir_date: "",
    cvCode: "",
    city: "",
    state: "",
    zip: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/purchase/paymentEntry', { state: { order: order } });
    console.log('order: ', order);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Product 1</label>
        <input
          type="number"
          required
          onChange={(e) => {
            const newBuyQuantity = [...order.buyQuantity];
            newBuyQuantity[0] = e.target.value;
            setOrder({ ...order, buyQuantity: newBuyQuantity });
          }}
        />
        <br/>
        <label>Product 2</label>
        <input
          type="number"
          required
          onChange={(e) => {
            const newBuyQuantity = [...order.buyQuantity];
            newBuyQuantity[1] = e.target.value;
            setOrder({ ...order, buyQuantity: newBuyQuantity });
          }}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Purchase;
