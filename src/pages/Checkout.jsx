import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';
import '../styles/checkout.css';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        city: '',
        pincode: ''
    });

    if (cartItems.length === 0 && !orderPlaced) {
        return <div className="container p-4">Your cart is empty.</div>;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate order placement
        setOrderPlaced(true);
        clearCart();
    };

    if (orderPlaced) {
        return (
            <div className="container order-success">
                <CheckCircle size={64} className="success-icon" />
                <h2>Order Placed Successfully!</h2>
                <p>Thank you for shopping with Medico. Your order will be delivered shortly.</p>
                <p>Payment Method: <strong>Cash on Delivery</strong></p>
                <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
            </div>
        );
    }

    return (
        <div className="checkout-page container">
            <h1 className="page-title">Checkout</h1>

            <div className="checkout-layout">
                <div className="checkout-form-section">
                    <h2>Shipping Details</h2>
                    <form id="checkout-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea name="address" required value={formData.address} onChange={handleChange}></textarea>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" required value={formData.city} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Pincode</label>
                                <input type="text" name="pincode" required value={formData.pincode} onChange={handleChange} />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="checkout-summary-section">
                    <div className="checkout-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="summary-item">
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>₹{item.price * item.quantity}</span>
                                </div>
                            ))}
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-row total">
                            <span>Total Amount</span>
                            <span>₹{cartTotal}</span>
                        </div>

                        <div className="payment-method">
                            <h4>Payment Method</h4>
                            <div className="payment-option selected">
                                <input type="radio" checked readOnly />
                                <label>Cash on Delivery (COD)</label>
                            </div>
                        </div>

                        <button type="submit" form="checkout-form" className="btn btn-primary place-order-btn">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
