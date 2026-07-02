/**
 * Mock API Service for BloodCare Application
 * Simulates backend API calls with static data
 * In production, these would be replaced with actual API endpoints
 */

// Mock blood inventory data
const bloodInventory = {
  'A+': 45,
  'A-': 23,
  'B+': 38,
  'B-': 15,
  'AB+': 12,
  'AB-': 8,
  'O+': 52,
  'O-': 18
};

// Mock donors database
let donors = [];

// Mock blood requests database
let bloodRequests = [];

/**
 * Get blood inventory
 * Simulates fetching current blood stock from database
 */
export const getBloodInventory = () => {
  return { ...bloodInventory };
};

/**
 * Get blood type availability
 * @param {string} bloodType - Blood type to check (e.g., 'A+')
 * @returns {object} - Availability information
 */
export const checkBloodAvailability = (bloodType) => {
  const units = bloodInventory[bloodType] || 0;
  return {
    bloodType,
    units,
    available: units > 0,
    status: units === 0 ? 'unavailable' : units < 20 ? 'low' : 'available'
  };
};

/**
 * Register a new donor
 * @param {object} donorData - Donor information
 * @returns {object} - Registration result
 */
export const registerDonor = (donorData) => {
  const newDonor = {
    id: generateId(),
    ...donorData,
    registeredDate: new Date().toISOString(),
    status: 'active'
  };

  donors.push(newDonor);

  return {
    success: true,
    message: 'Donor registered successfully',
    donorId: newDonor.id
  };
};

/**
 * Submit blood request
 * @param {object} requestData - Blood request information
 * @returns {object} - Request submission result
 */
export const submitBloodRequest = (requestData) => {
  const newRequest = {
    id: generateId(),
    requestId: `REQ${Date.now()}`,
    ...requestData,
    submittedDate: new Date().toISOString(),
    status: requestData.urgency === 'emergency' ? 'processing' : 'pending'
  };

  bloodRequests.push(newRequest);

  return {
    success: true,
    message: 'Blood request submitted successfully',
    requestId: newRequest.requestId,
    estimatedTime: getEstimatedTime(requestData.urgency)
  };
};

/**
 * Get all donors
 * @returns {array} - List of donors
 */
export const getDonors = () => {
  return [...donors];
};

/**
 * Get all blood requests
 * @returns {array} - List of blood requests
 */
export const getBloodRequests = () => {
  return [...bloodRequests];
};

/**
 * Search donors by blood type
 * @param {string} bloodType - Blood type to search
 * @returns {array} - Matching donors
 */
export const searchDonorsByBloodType = (bloodType) => {
  return donors.filter(donor => donor.bloodType === bloodType);
};

/**
 * Update blood inventory
 * @param {string} bloodType - Blood type to update
 * @param {number} units - Number of units to add/remove
 * @returns {object} - Update result
 */
export const updateBloodInventory = (bloodType, units) => {
  if (bloodInventory[bloodType] !== undefined) {
    bloodInventory[bloodType] += units;
    if (bloodInventory[bloodType] < 0) {
      bloodInventory[bloodType] = 0;
    }
    return {
      success: true,
      message: 'Inventory updated successfully',
      newUnits: bloodInventory[bloodType]
    };
  }
  return {
    success: false,
    message: 'Invalid blood type'
  };
};

/**
 * Get statistics
 * @returns {object} - Blood bank statistics
 */
export const getStatistics = () => {
  const totalUnits = Object.values(bloodInventory).reduce((sum, units) => sum + units, 0);
  const availableTypes = Object.values(bloodInventory).filter(units => units > 0).length;
  const lowStockTypes = Object.values(bloodInventory).filter(units => units < 20 && units > 0).length;

  return {
    totalUnits,
    availableTypes,
    lowStockTypes,
    totalDonors: donors.length,
    pendingRequests: bloodRequests.filter(req => req.status === 'pending').length,
    activeDonors: donors.filter(donor => donor.status === 'active').length
  };
};

/**
 * Get blood compatibility
 * @param {string} bloodType - Blood type
 * @returns {object} - Compatibility information
 */
export const getBloodCompatibility = (bloodType) => {
  const compatibilityChart = {
    'A+': { canDonateTo: ['A+', 'AB+'], canReceiveFrom: ['A+', 'A-', 'O+', 'O-'] },
    'A-': { canDonateTo: ['A+', 'A-', 'AB+', 'AB-'], canReceiveFrom: ['A-', 'O-'] },
    'B+': { canDonateTo: ['B+', 'AB+'], canReceiveFrom: ['B+', 'B-', 'O+', 'O-'] },
    'B-': { canDonateTo: ['B+', 'B-', 'AB+', 'AB-'], canReceiveFrom: ['B-', 'O-'] },
    'AB+': { canDonateTo: ['AB+'], canReceiveFrom: ['All Types'] },
    'AB-': { canDonateTo: ['AB+', 'AB-'], canReceiveFrom: ['A-', 'B-', 'AB-', 'O-'] },
    'O+': { canDonateTo: ['A+', 'B+', 'AB+', 'O+'], canReceiveFrom: ['O+', 'O-'] },
    'O-': { canDonateTo: ['All Types'], canReceiveFrom: ['O-'] }
  };

  return compatibilityChart[bloodType] || { canDonateTo: [], canReceiveFrom: [] };
};

// Helper functions

function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function getEstimatedTime(urgency) {
  switch (urgency) {
    case 'emergency':
      return 'Immediate processing (within 1 hour)';
    case 'urgent':
      return '6-12 hours';
    case 'normal':
    default:
      return '24-48 hours';
  }
}

// Simulate API delay (optional - for more realistic behavior)
export const simulateDelay = (ms = 500) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Export all functions as a single API object
export default {
  getBloodInventory,
  checkBloodAvailability,
  registerDonor,
  submitBloodRequest,
  getDonors,
  getBloodRequests,
  searchDonorsByBloodType,
  updateBloodInventory,
  getStatistics,
  getBloodCompatibility,
  simulateDelay
};
