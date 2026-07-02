import React, { useState, useEffect } from 'react';
import { getBloodInventory } from '../services/mockApi';
import './Search.css';

const Search = () => {
  const [inventory, setInventory] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedBloodType, setSelectedBloodType] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const data = getBloodInventory();
      setInventory(data);
      setLoading(false);
    }, 500);
  }, []);

  const getAvailabilityStatus = (units) => {
    if (units === 0) return { status: 'unavailable', label: 'Unavailable' };
    if (units < 20) return { status: 'low', label: 'Low Stock' };
    return { status: 'available', label: 'Available' };
  };

  const filteredInventory = Object.entries(inventory).filter(([bloodType]) =>
    bloodType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="search-page">
        <div className="spinner"></div>
        <p className="text-center mt-3">Loading blood inventory...</p>
      </div>
    );
  }

  return (
    <div className="search-page fade-in">
      <div className="search-header">
        <h1>🔍 Search Blood Inventory</h1>
        <p>Check real-time availability of blood types across our network</p>
      </div>

      <div className="search-container card">
        <div className="search-box">
          <input
            type="text"
            className="form-input search-input"
            placeholder="Search blood type (e.g., A+, O-, AB+)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search blood type"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="quick-filters">
          <span className="filter-label">Quick Filters:</span>
          {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
            <button
              key={type}
              className={`filter-btn ${searchTerm === type ? 'active' : ''}`}
              onClick={() => setSearchTerm(type)}
            >
              {type}
            </button>
          ))}
          <button
            className="filter-btn clear-btn"
            onClick={() => setSearchTerm('')}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="inventory-grid">
        {filteredInventory.length > 0 ? (
          filteredInventory.map(([bloodType, units]) => {
            const { status, label } = getAvailabilityStatus(units);
            return (
              <div
                key={bloodType}
                className={`inventory-card card ${status}`}
                onClick={() => setSelectedBloodType(bloodType)}
              >
                <div className="blood-type-large">{bloodType}</div>
                <div className="units-available">
                  <span className="units-number">{units}</span>
                  <span className="units-label">Units Available</span>
                </div>
                <span className={`badge badge-${status}`}>{label}</span>
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${status}`}
                    style={{ width: `${Math.min((units / 60) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-results card">
            <span className="no-results-icon">🔍</span>
            <h3>No Results Found</h3>
            <p>No blood types match your search criteria.</p>
          </div>
        )}
      </div>

      {selectedBloodType && (
        <div className="modal-overlay" onClick={() => setSelectedBloodType(null)}>
          <div className="modal-content card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedBloodType(null)}
            >
              ✕
            </button>
            <h2>Blood Type: {selectedBloodType}</h2>
            <div className="modal-body">
              <div className="info-row">
                <span className="info-label">Units Available:</span>
                <span className="info-value">{inventory[selectedBloodType]}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Status:</span>
                <span className={`badge badge-${getAvailabilityStatus(inventory[selectedBloodType]).status}`}>
                  {getAvailabilityStatus(inventory[selectedBloodType]).label}
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Compatible With:</span>
                <span className="info-value">
                  {selectedBloodType === 'O-' ? 'Universal Donor - All Types' :
                   selectedBloodType === 'AB+' ? 'Universal Recipient - Can receive all' :
                   'Check compatibility chart'}
                </span>
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn btn-primary">Request This Blood</button>
              <button className="btn btn-secondary" onClick={() => setSelectedBloodType(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="info-section card">
        <h3>📊 Inventory Statistics</h3>
        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-number">
              {Object.values(inventory).reduce((a, b) => a + b, 0)}
            </span>
            <span className="stat-label">Total Units</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {Object.values(inventory).filter((units) => units > 0).length}
            </span>
            <span className="stat-label">Types Available</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {Object.values(inventory).filter((units) => units < 20 && units > 0).length}
            </span>
            <span className="stat-label">Low Stock</span>
          </div>
        </div>
      </div>

      <div className="alert alert-info">
        <strong>ℹ️ Note:</strong> This is real-time mock data for demonstration purposes. 
        In a production environment, this would connect to a live database via REST API.
      </div>
    </div>
  );
};

export default Search;
