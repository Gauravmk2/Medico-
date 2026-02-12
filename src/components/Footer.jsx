import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>Medico</h3>
                        <p>Your trusted online pharmacy. Genuine medicines delivered to your doorstep with Cash on Delivery.</p>
                    </div>

                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">All Medicines</a></li>
                            <li><a href="/upload">Upload Prescription</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <div className="contact-item">
                            <Phone size={16} /> <span>+1 234 567 890</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={16} /> <span>support@medico.com</span>
                        </div>
                        <div className="contact-item">
                            <MapPin size={16} /> <span>123 Health Street, City, Country</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Medico. All rights reserved.</p>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                        <MessageCircle size={20} /> Order via WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
