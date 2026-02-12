import React from 'react';
import { Shield, Award, Users, Heart } from 'lucide-react';
import '../styles/about.css';

const About = () => {
    return (
        <div className="about-page container">
            <div className="about-header text-center">
                <h1 className="page-title">About Medico</h1>
                <p className="subtitle">Your health is our priority. We are committed to providing genuine medicines and healthcare products.</p>
            </div>

            <section className="about-content">
                <div className="about-mission">
                    <h2>Our Mission</h2>
                    <p>
                        To make healthcare accessible, affordable, and reliable for everyone.
                        We strive to deliver genuine medicines to every corner of the country,
                        ensuring that no one has to compromise on their health.
                    </p>
                </div>

                <div className="about-stats-grid">
                    <div className="stat-card">
                        <Users size={32} className="stat-icon" />
                        <h3>10k+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stat-card">
                        <Shield size={32} className="stat-icon" />
                        <h3>100%</h3>
                        <p>Genuine Products</p>
                    </div>
                    <div className="stat-card">
                        <Award size={32} className="stat-icon" />
                        <h3>50+</h3>
                        <p>Years of Experience</p>
                    </div>
                    <div className="stat-card">
                        <Heart size={32} className="stat-icon" />
                        <h3>24/7</h3>
                        <p>Customer Support</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
