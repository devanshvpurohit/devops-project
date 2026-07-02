import React, { useState } from 'react';
import './Request.css';

const Request = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    bloodType: '',
    units: '1',
    urgency: 'normal',
    hospitalName: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    reason: '',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const urgencyLevels = [
    { value: 'normal', label: 'Normal', color: '#06d6a0' },
    { value: 'urgent', label: 'Urgent', color: '#ffd166' },
    { value: 'emergency', label: 'Emergency', color: '#ef476f' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Blood Request:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        patientName: '',
        bloodType: '',
        units: '1',
        urgency: 'normal',
        hospitalName: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        reason: '',
        additionalInfo: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="request-page fade-in">
        <div className="success-message card">
          <div className="success-icon">📋</div>
          <h2>Request Submitted Successfully!</h2>
          <p>Your blood request has been received and is being processed.</p>
          <p>We'll contact you shortly with availability information.</p>
          <div className="request-id">
            <strong>Request ID:</strong> #{Math.floor(Math.random() * 100000)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="request-page fade-in">
      <div className="request-header">
        <h1>📋 Request Blood</h1>
        <p>Submit your blood requirement request - We're here to help</p>
      </div>

      <div className="row">
        <div className="col col-2">
          <div className="card info-panel">
            <h3>🚨 Emergency Guidelines</h3>
            <div className="emergency-info">
              <p>
                <strong>For life-threatening emergencies:</strong><br />
                Call our 24/7 hotline immediately
              </p>
              <a href="tel:+911800xxxxxxx" className="emergency-number">
                📞 +91 1800-XXX-XXXX
              </a>
            </div>

            <div className="info-box">
              <h4>What to Prepare:</h4>
              <ul>
                <li>Patient's blood type</li>
                <li>Hospital details</li>
                <li>Doctor's prescription (if available)</li>
                <li>Valid contact information</li>
                <li>Reason for transfusion</li>
              </ul>
            </div>

            <div className="info-box">
              <h4>Processing Time:</h4>
              <ul>
                <li><span className="dot normal"></span> Normal: 24-48 hours</li>
                <li><span className="dot urgent"></span> Urgent: 6-12 hours</li>
                <li><span className="dot emergency"></span> Emergency: Immediate</li>
              </ul>
            </div>

            <div className="alert alert-info">
              <strong>Note:</strong> All requests are subject to blood availability 
              and verification procedures.
            </div>
          </div>
        </div>

        <div className="col col-2">
          <form onSubmit={handleSubmit} className="card request-form">
            <h3>Blood Request Form</h3>

            <div className="form-section">
              <h4>Patient Information</h4>
              
              <div className="form-group">
                <label className="form-label">Patient Name *</label>
                <input
                  type="text"
                  name="patientName"
                  className="form-input"
                  value={formData.patientName}
                  onChange={handleChange}
                  placeholder="Enter patient's full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Blood Type Required *</label>
                  <select
                    name="bloodType"
                    className="form-select"
                    value={formData.bloodType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Blood Type</option>
                    {bloodTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Units Required *</label>
                  <input
                    type="number"
                    name="units"
                    className="form-input"
                    value={formData.units}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Urgency Level *</label>
                <div className="urgency-selector">
                  {urgencyLevels.map(level => (
                    <label key={level.value} className="urgency-option">
                      <input
                        type="radio"
                        name="urgency"
                        value={level.value}
                        checked={formData.urgency === level.value}
                        onChange={handleChange}
                      />
                      <span 
                        className={`urgency-label ${formData.urgency === level.value ? 'active' : ''}`}
                        style={{ borderColor: level.color }}
                      >
                        {level.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Hospital/Medical Facility *</label>
                <input
                  type="text"
                  name="hospitalName"
                  className="form-input"
                  value={formData.hospitalName}
                  onChange={handleChange}
                  placeholder="Hospital name and location"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Reason for Transfusion *</label>
                <textarea
                  name="reason"
                  className="form-textarea"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Surgery, accident, medical condition, etc."
                  rows="3"
                  required
                ></textarea>
              </div>
            </div>

            <div className="form-section">
              <h4>Contact Information</h4>
              
              <div className="form-group">
                <label className="form-label">Contact Person Name *</label>
                <input
                  type="text"
                  name="contactName"
                  className="form-input"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Your name or relative's name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="contactPhone"
                    className="form-input"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="contactEmail"
                    className="form-input"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  className="form-textarea"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Any additional details we should know..."
                  rows="3"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit Blood Request
            </button>

            <p className="form-note">
              * All requests will be verified before processing
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Request;
