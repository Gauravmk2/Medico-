import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, AlertCircle } from 'lucide-react';
import { products } from '../assets/data';
import { useCart } from '../context/CartContext';
import '../styles/product-detail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        // Simulate API fetch
        const found = products.find(p => p.id === parseInt(id));
        setProduct(found);
        setLoading(false);
    }, [id]);

    if (loading) return <div className="container p-4">Loading...</div>;
    if (!product) return <div className="container p-4">Product not found</div>;

    return (
        <div className="product-detail-page container">
            <Link to="/products" className="back-link">
                <ArrowLeft size={16} /> Back to Medicines
            </Link>

            <div className="product-detail-grid">
                <div className="product-detail-image">
                    <img src="/images/Paracetamol-500-mg-Tablet_1.webp" alt={product.name} />
                </div>

                <div className="product-detail-info">
                    <span className="detail-category">{product.category}</span>
                    <h1 className="detail-title">{product.name}</h1>
                    <p className="detail-price">₹{product.price}</p>

                    {product.requiresPrescription && (
                        <div className="prescription-warning">
                            <AlertCircle size={20} />
                            <span>This medicine requires a valid prescription.</span>
                        </div>
                    )}

                    <div className="detail-description">
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>

                    <div className="detail-actions">
                        <button className="btn btn-primary addToCart-btn" onClick={() => addToCart(product)}>
                            <ShoppingCart size={20} /> Add to Cart
                        </button>
                        {product.requiresPrescription && (
                            <Link to="/upload" className="btn btn-outline">Upload Prescription Now</Link>
                        )}
                    </div>

                    <div className="delivery-info">
                        <p className="highlight">Cash on Delivery Available</p>
                        <p>Delivered within 24-48 hours</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
