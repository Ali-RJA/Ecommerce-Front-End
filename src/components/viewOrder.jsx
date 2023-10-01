import { useLocation, useNavigate } from "react-router-dom";

const ViewOrder = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { order } = location.state;

    if (!order || !order.buyQuantity) {
        return <div>Order not found or incomplete</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to the next page, passing updated order object
        navigate("/purchase/viewConfirmation", { state: { order: order } });
    };

    return (
        <div>
            <h2>Order Details</h2>
            <h3>Items Ordered:</h3>
            <ul>
                {order.buyQuantity.map((quantity, index) => (
                    <li key={index}>
                        Product {index + 1}: Quantity - {quantity}
                    </li>
                ))}
            </ul>
            <h3>Payment Information:</h3>
            <p>Card Number: {order.credit_card_number}</p>
            <h3>Shipping Details:</h3>
            <p>Address 1: {order.address1}</p>
            <p>Address 2: {order.address2}</p>
            <form onSubmit={handleSubmit}>
                <button type="submit">Next Page</button>
            </form>
        </div>
    );
};

export default ViewOrder;
