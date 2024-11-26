import { useState, useEffect } from 'react';
import { validateUserData } from '../utils/validation';

function UserForm({ userData, setUserData }) {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  useEffect(() => {
    const newErrors = validateUserData(userData);
    setErrors(newErrors);
  }, [userData]);

  const getFieldClass = (fieldName) => {
    return `form-control ${touched[fieldName] && errors[fieldName] ? 'error' : ''}`;
  };

  return (
    <div className="user-form">
      <h2>Your Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className={getFieldClass('name')}
            value={userData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && (
            <div className="error-message">{errors.name}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <input
            type="text"
            id="address"
            name="address"
            className={getFieldClass('address')}
            value={userData.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.address && errors.address && (
            <div className="error-message">{errors.address}</div>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              className={getFieldClass('city')}
              value={userData.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.city && errors.city && (
              <div className="error-message">{errors.city}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="state">State *</label>
            <input
              type="text"
              id="state"
              name="state"
              className={getFieldClass('state')}
              value={userData.state}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.state && errors.state && (
              <div className="error-message">{errors.state}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="zip">ZIP *</label>
            <input
              type="text"
              id="zip"
              name="zip"
              className={getFieldClass('zip')}
              value={userData.zip}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.zip && errors.zip && (
              <div className="error-message">{errors.zip}</div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              className={getFieldClass('email')}
              value={userData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={getFieldClass('phone')}
              value={userData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.phone && errors.phone && (
              <div className="error-message">{errors.phone}</div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserForm; 