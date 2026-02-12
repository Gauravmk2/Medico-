import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Upload } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">
                    <span className="logo-icon">⚕️</span>
                    <span className="logo-text">Medico</span>
                </Link>

                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/products" className="nav-link">Medicines</Link>
                    <Link to="/upload" className="nav-link upload-btn">
                        <Upload size={16} />
                        Upload Prescription
                    </Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>

                <div className="nav-actions">
                    <Link to="/cart" className="cart-btn">
                        <ShoppingCart size={22} />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </Link>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
