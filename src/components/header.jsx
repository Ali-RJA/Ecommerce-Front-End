// Header.jsx
import './Header.css';
import logo from '../assets/logo.png';


const Header = () => {
    const handleSearch = () => {
        // TODO: Add your search functionality here
        const query = document.getElementById('search-input').value;
        console.log("Searching for:", query);
    }

    return (
        <header className="header">
            <div className="logo-section">
                <img src={logo} alt="Your Logo" className="logo"/>
            </div>
            <div className="search-and-login">
            <div className="search-container">
                <input type="text" id="search-input" placeholder="Search..." className="search-bar"/>
                <button className="search-btn" onClick={handleSearch}>🔍</button>
            </div>
                <button className="login-btn">Login</button>
            </div>
        </header>
    );
};

export default Header;



