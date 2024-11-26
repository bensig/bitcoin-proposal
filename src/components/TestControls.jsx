import { useState } from 'react';

function TestControls({ onLoadTestData }) {
  const [showTestControls] = useState(process.env.NODE_ENV === 'development');

  const testUserData = {
    name: "Jane Smith",
    address: "123 Test Street",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    email: "jane.smith@example.com",
    phone: "415-555-0123"
  };

  if (!showTestControls) return null;

  return (
    <div className="test-controls">
      <button 
        onClick={() => onLoadTestData(testUserData)}
        className="test-button"
      >
        Load Test Data
      </button>
    </div>
  );
}

export default TestControls;
