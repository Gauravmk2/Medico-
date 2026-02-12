import React, { useState } from 'react';
import { Upload, CheckCircle, FileText } from 'lucide-react';
import '../styles/upload.css';

const UploadPrescription = () => {
    const [file, setFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: ''
    });

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate upload
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="container upload-success">
                <CheckCircle size={64} className="success-icon" />
                <h2>Prescription Uploaded Successfully!</h2>
                <p>Our pharmacists will review your prescription and contact you shortly.</p>
                <button className="btn btn-primary" onClick={() => window.location.href = '/'}>Back to Home</button>
            </div>
        );
    }

    return (
        <div className="upload-page container">
            <h1 className="page-title">Upload Prescription</h1>

            <div className="upload-grid">
                <div className="upload-info">
                    <h2>How it works?</h2>
                    <div className="step">
                        <div className="step-number">1</div>
                        <div>
                            <h3>Upload Prescription</h3>
                            <p>Upload a clear image of your doctor's prescription.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <div>
                            <h3>We Verify</h3>
                            <p>Our pharmacists will verify the prescription details.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <div>
                            <h3>Delivery</h3>
                            <p>Medicines will be delivered to your doorstep.</p>
                        </div>
                    </div>

                    <div className="safety-note">
                        <p><strong>Note:</strong> Please ensure the patient name, doctor's name, and date are clearly visible.</p>
                    </div>
                </div>

                <div className="upload-form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="file-upload-area">
                            <input
                                type="file"
                                id="prescription-file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="file-input"
                                required
                            />
                            <label htmlFor="prescription-file" className="file-label">
                                {file ? (
                                    <div className="file-selected">
                                        <FileText size={32} />
                                        <span>{file.name}</span>
                                        <span className="change-text">Click to change</span>
                                    </div>
                                ) : (
                                    <div className="file-placeholder">
                                        <Upload size={40} />
                                        <span>Click to upload image</span>
                                        <span className="sub-text">JPG, PNG supported</span>
                                    </div>
                                )}
                            </label>
                        </div>

                        <div className="form-group">
                            <label>Patient Name</label>
                            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter patient's full name" />
                        </div>

                        <div className="form-group">
                            <label>Contact Number</label>
                            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter mobile number" />
                        </div>

                        <div className="form-group">
                            <label>Delivery Address</label>
                            <textarea name="address" required value={formData.address} onChange={handleChange} placeholder="Enter complete address"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Submit Prescription
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadPrescription;
