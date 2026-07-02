import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const stats = [
    { icon: '🩸', number: '15000+', label: 'Blood Units Donated' },
    { icon: '👥', number: '5000+', label: 'Active Donors' },
    { icon: '🏥', number: '250+', label: 'Lives Saved' },
    { icon: '🎯', number: '100%', label: 'Success Rate' }
  ];

  const features = [
    {
      icon: '🔍',
      title: 'Search Blood',
      description: 'Instantly check availability of blood types across our inventory',
      link: '/search'
    },
    {
      icon: '❤️',
      title: 'Donate Blood',
      description: 'Register as a donor and help save lives in your community',
      link: '/donate'
    },
    {
      icon: '📋',
      title: 'Request Blood',
      description: 'Submit urgent blood requests for yourself or loved ones',
      link: '/request'
    }
  ];

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Saving Lives, One Donation at a Time
          </h1>
          <p className="hero-subtitle">
            BloodCare connects donors with those in need, making blood donation 
            accessible, efficient, and life-saving.
          </p>
          <div className="hero-buttons">
            <Link to="/donate" className="btn btn-primary btn-lg">
              Become a Donor
            </Link>
            <Link to="/search" className="btn btn-secondary btn-lg">
              Search Blood
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="blood-drop-animation">
            <span className="drop">🩸</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">How BloodCare Works</h2>
          <p className="section-subtitle">
            Three simple steps to make a difference
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to={feature.link} className="btn btn-secondary">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blood Types Section */}
      <section className="blood-types-section">
        <div className="container">
          <h2 className="section-title">Available Blood Types</h2>
          <div className="blood-types-grid">
            {bloodTypes.map((type, index) => (
              <div key={index} className="blood-type-card">
                <div className="blood-type">{type}</div>
                <div className="availability-status">
                  <span className="status-indicator available"></span>
                  Available
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Save Lives?</h2>
            <p>
              Join thousands of donors who have made a difference. 
              Your donation can save up to three lives.
            </p>
            <Link to="/donate" className="btn btn-primary btn-lg">
              Start Donating Today
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="emergency-banner">
        <div className="container">
          <div className="emergency-content">
            <span className="emergency-icon">🚨</span>
            <div>
              <strong>Emergency Blood Needed?</strong>
              <p>Call our 24/7 hotline: +91 1800-XXX-XXXX</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
