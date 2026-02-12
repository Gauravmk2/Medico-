import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="container empty-cart">
                <h2>Your Cart is Empty</h2>
                <p>Looks like you haven't added any medicines yet.</p>
                <Link to="/products" className="btn btn-primary">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-page container">
            <h1 className="page-title">Your Cart</h1>

            <div className="cart-layout">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p className="item-price">₹{item.price}</p>
                                {item.requiresPrescription && (
                                    <span className="prescription-badge">Prescription Required</span>
                                )}
                            </div>

                            <div className="cart-item-actions">
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                        <Minus size={16} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                        <Plus size={16} />
                                    </button>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹{cartTotal}</span>
                    </div>
                    <div className="summary-row">
                        <span>Delivery Charges</span>
                        <span className="free-text">Free</span>
                    </div>
                    <div className="summary-total">
                        <span>Total Amount</span>
                        <span>₹{cartTotal}</span>
                    </div>

                    <button className="btn btn-primary checkout-btn" onClick={() => navigate('/checkout')}>
                        Proceed to Checkout
                    </button>

                    <Link to="/products" className="continue-shopping">
                        <ArrowLeft size={16} /> Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
