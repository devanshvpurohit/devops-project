import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bloodType: '',
    age: '',
    weight: '',
    lastDonation: '',
    medicalConditions: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.bloodType) newErrors.bloodType = 'Blood type is required';
    if (!formData.age) newErrors.age = 'Age is required';
    else if (formData.age < 18 || formData.age > 65) newErrors.age = 'Age must be between 18 and 65';
    if (!formData.weight) newErrors.weight = 'Weight is required';
    else if (formData.weight < 50) newErrors.weight = 'Weight must be at least 50 kg';
    if (!formData.city.trim()) newErrors.city = 'City is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate API call
    console.log('Donor Registration:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        bloodType: '',
        age: '',
        weight: '',
        lastDonation: '',
        medicalConditions: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="donate-page fade-in">
        <div className="success-message card">
          <div className="success-icon">✅</div>
          <h2>Registration Successful!</h2>
          <p>Thank you for registering as a blood donor!</p>
          <p>We'll contact you soon with donation details.</p>
          <div className="success-animation">
            <span className="heart">❤️</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="donate-page fade-in">
      <div className="donate-header">
        <h1>❤️ Become a Blood Donor</h1>
        <p>Join thousands of heroes saving lives every day</p>
      </div>

      <div className="row">
        <div className="col col-2">
          <div className="card info-card">
            <h3>Why Donate Blood?</h3>
            <ul className="benefits-list">
              <li>
                <span className="benefit-icon">💪</span>
                <div>
                  <strong>Save Lives</strong>
                  <p>One donation can save up to 3 lives</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">🏥</span>
                <div>
                  <strong>Health Check</strong>
                  <p>Free health screening before donation</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">🎁</span>
                <div>
                  <strong>Feel Great</strong>
                  <p>Experience the joy of helping others</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">🔄</span>
                <div>
                  <strong>Renewable Resource</strong>
                  <p>Your body replaces donated blood quickly</p>
                </div>
              </li>
            </ul>

            <div className="eligibility-criteria">
              <h4>Eligibility Criteria:</h4>
              <ul>
                <li>✓ Age: 18-65 years</li>
                <li>✓ Weight: Minimum 50 kg</li>
                <li>✓ Good health condition</li>
                <li>✓ No recent illnesses</li>
                <li>✓ 3 months since last donation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col col-2">
          <form onSubmit={handleSubmit} className="card donor-form">
            <h3>Donor Registration Form</h3>

            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="fullName"
                className={`form-input ${errors.fullName ? 'error' : ''}`}
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Blood Type *</label>
                <select
                  name="bloodType"
                  className={`form-select ${errors.bloodType ? 'error' : ''}`}
                  value={formData.bloodType}
                  onChange={handleChange}
                >
                  <option value="">Select Blood Type</option>
                  {bloodTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.bloodType && <span className="error-message">{errors.bloodType}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Age *</label>
                <input
                  type="number"
                  name="age"
                  className={`form-input ${errors.age ? 'error' : ''}`}
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="18-65"
                  min="18"
                  max="65"
                />
                {errors.age && <span className="error-message">{errors.age}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Weight (kg) *</label>
                <input
                  type="number"
                  name="weight"
                  className={`form-input ${errors.weight ? 'error' : ''}`}
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="Min 50 kg"
                  min="50"
                />
                {errors.weight && <span className="error-message">{errors.weight}</span>}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Last Donation Date (if any)</label>
              <input
                type="date"
                name="lastDonation"
                className="form-input"
                value={formData.lastDonation}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Medical Conditions (if any)</label>
              <textarea
                name="medicalConditions"
                className="form-textarea"
                value={formData.medicalConditions}
                onChange={handleChange}
                placeholder="Please list any medical conditions or medications"
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address"
                className="form-input"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street address"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">City *</label>
                <input
                  type="text"
                  name="city"
                  className={`form-input ${errors.city ? 'error' : ''}`}
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                />
                {errors.city && <span className="error-message">{errors.city}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">State</label>
                <input
                  type="text"
                  name="state"
                  className="form-input"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                />
              </div>

              <div className="form-group">
                <label className="form-label">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  className="form-input"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="ZIP"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Register as Donor
            </button>

            <p className="form-note">
              * Required fields. Your information will be kept confidential.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
