import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-page container">
            <h1 className="page-title text-center">Contact Us</h1>

            <div className="contact-grid">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Have questions about your order or our services? We're here to help.</p>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="icon-box"><Phone size={20} /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>+1 234 567 890</p>
                                <p>Mon-Sat 9am to 6pm</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Mail size={20} /></div>
                            <div>
                                <h3>Email</h3>
                                <p>support@medico.com</p>
                                <p>help@medico.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><MapPin size={20} /></div>
                            <div>
                                <h3>Address</h3>
                                <p>123 Health Street, </p>
                                <p>Medical District, City - 400001</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-card">
                    {submitted ? (
                        <div className="contact-success">
                            <h2>Message Sent!</h2>
                            <p>Thanks for reaching out. We will get back to you soon.</p>
                            <button
                                className="btn btn-outline"
                                onClick={() => setSubmitted(false)}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" required placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" required placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea required rows="5" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Send Message <Send size={16} style={{ marginLeft: '8px' }} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
