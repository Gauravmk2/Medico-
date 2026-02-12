import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, ShieldCheck, CreditCard } from 'lucide-react';
import '../styles/home.css';
// import bgImage from 'src/assets/images/high-angle-arrangement-medical-objects-green-background.jpg';

const Home = () => {
    const categories = [
        { id: 1, name: 'Pain Relief', icon: '💊' },
        { id: 2, name: 'Digestion', icon: '🥛' },
        { id: 3, name: 'Skin Care', icon: '🧴' },
        { id: 4, name: 'Vitamins', icon: '🍎' },
        { id: 5, name: 'Diabetes', icon: '💉' },
        { id: 6, name: 'Baby Care', icon: '👶' },
    ];

    const featuredProducts = [
        { id: 1, name: 'Paracetamol 500mg', price: 50, image: '/images/Paracetamol-500-mg-Tablet_1.webp' },
        { id: 2, name: 'Vitamin C Tablets', price: 120, image: '/images/vitamin-c-500mg-chewable-tablets-479.jpg' },
        { id: 3, name: 'Cough Syrup', price: 85, image: '/images/cough-syrup-pack-of-150ml--257.jpg' },
        { id: 4, name: 'Antiseptic Liquid', price: 110, image: '/images/10640-500x500.jfif' },
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1>Order Medicines Online – <br /> <span className="highlight">COD Available</span></h1>
                        <p>Genuine medicines delivered to your doorstep. Trustworthy, fast, and safe.</p>
                        <div className="hero-buttons">
                            <Link to="/products" className="btn btn-primary">Order Medicines</Link>
                            <Link to="/upload" className="btn btn-outline">Upload Prescription</Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        {/* Placeholder for hero image */}
                        <div className="hero-img-placeholder">🏥</div>
                    </div>
                </div>
            </section>

            {/* Features / Why Choose Us */}
            <section className="features-section">
                <div className="container features-grid">
                    <div className="feature-card">
                        <ShieldCheck size={40} className="feature-icon" />
                        <h3>Genuine Medicines</h3>
                        <p>100% authentic products sourced directly from manufacturers.</p>
                    </div>
                    <div className="feature-card">
                        <CheckCircle size={40} className="feature-icon" />
                        <h3>Licensed Pharmacy</h3>
                        <p>Operated by registered pharmacists ensuring safety.</p>
                    </div>
                    <div className="feature-card">
                        <Truck size={40} className="feature-icon" />
                        <h3>Fast Delivery</h3>
                        <p>Quick doorstep delivery within 24-48 hours.</p>
                    </div>
                    <div className="feature-card">
                        <CreditCard size={40} className="feature-icon" />
                        <h3>COD Available</h3>
                        <p>Pay cash upon delivery for your peace of mind.</p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="section categories-section">
                <div className="container">
                    <h2 className="section-title">Shop by Category</h2>
                    <div className="categories-grid">
                        {categories.map((cat) => (
                            <Link to={`/products?category=${cat.name}`} key={cat.id} className="category-card">
                                <span className="category-icon">{cat.icon}</span>
                                <h3>{cat.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section featured-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Medicines</h2>
                        <Link to="/products" className="view-all-link">View All <ArrowRight size={16} /></Link>
                    </div>
                    <div className="products-grid">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p className="product-price">₹{product.price}</p>
                                    <button className="btn btn-primary btn-sm">Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
