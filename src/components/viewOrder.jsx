import { useLocation, useNavigate } from "react-router-dom";
import NavBar from './Navbar';
import SampleFooter from './footer';
import './Contact.css';

const ViewOrder = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderDTO } = location.state;

    if (!orderDTO || !orderDTO.buyQuantity) {
        return <div>Order not found or incomplete</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to the next page, passing updated orderDTO object
        navigate("/purchase/viewConfirmation", { state: { orderDTO } });
    };

    return (
        <div className="container bg-beige">
            <NavBar />
            <h2>Order Details</h2>
            <h3>Items Ordered:</h3>
            <ul>
                {orderDTO.buyQuantity.map((quantity, index) => (
                    <li key={index}>
                        Product {index + 1}: Quantity - {quantity}
                    </li>
                ))}
            </ul>
            <h3>Payment Information:</h3>
            <p>Card Number: {orderDTO.creditCardNumber}</p>
            <h3>Shipping Details:</h3>
            <p>Address 1: {orderDTO.address1}</p>
            <p>Address 2: {orderDTO.address2}</p>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="custom-btn">Next Page</button>
            </form>
            <SampleFooter />
        </div>
    );
};

export default ViewOrder;

