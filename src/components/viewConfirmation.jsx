import NavBar from './Navbar';

const ViewConfirmation = () => {
    const confirmationNumber = "ABC123XYZ";  // Hardcoded confirmation number

    return (
        <div>
            <h2>Thank you for your order!</h2>
            <p>Your order has been received and is now being processed.</p>
            <p>Your confirmation number is: <strong>{confirmationNumber}</strong></p>
            <p>Please save this number for your records.</p>
        </div>
    );
};

export default ViewConfirmation;
