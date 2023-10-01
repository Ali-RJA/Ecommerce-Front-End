import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const PaymentEntry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(location.state.order); // 这里使用了 useState
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value, // 更新 order 对象的相应属性
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 直接将已更新的 order 对象传递给下一个页面
    navigate("/purchase/shippingEntry", { state: { order: order} });
    console.log("order: ", order);
  };

  return (
    <div>
      <h1>Payment Entry</h1>
      Product 1: {order.buyQuantity[0]}
      <br />
      Product 2: {order.buyQuantity[1]}
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
