import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const ShippingEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [order, setOrder] = useState(location.state.order);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const regex = /^\d{16}$/;
        if (regex.test(value)) {
            console.log("The string contains a 16-digit number.");
        } else {
            console.log("The string doesn't match the criteria.");
        }
        setOrder(prevOrder => ({
            ...prevOrder,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/purchase/viewOrder', { state: { order: order} });
    };

    return (
        <div>
            <h2>Shipping Information</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="card_holder_name" value={order.card_holder_name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Address Line 1:
                    <input type="text" name="address1" value={order.address1} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Address Line 2:
                    <input type="text" name="address2" value={order.address2} onChange={handleChange} />
                </label>
                <br />
                <label>
                    City:
                    <input type="text" name="city" value={order.city} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    State:
                    <input type="text" name="state" value={order.state} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Zip:
                    <input type="text" name="zip" value={order.zip} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Continue to View Order</button>
            </form>
        </div>
    );
};

export default ShippingEntry;
