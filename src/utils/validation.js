export const validateUserData = (userData) => {
  const errors = {};
  
  if (!userData.name?.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!userData.address?.trim()) {
    errors.address = 'Address is required';
  }
  
  if (!userData.city?.trim()) {
    errors.city = 'City is required';
  }
  
  if (!userData.state?.trim()) {
    errors.state = 'State is required';
  }
  
  if (!userData.zip?.trim()) {
    errors.zip = 'ZIP code is required';
  } else if (!/^\d{5}(-\d{4})?$/.test(userData.zip)) {
    errors.zip = 'Invalid ZIP code format';
  }
  
  if (!userData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
    errors.email = 'Invalid email format';
  }
  
  if (!userData.phone?.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(userData.phone)) {
    errors.phone = 'Invalid phone number format';
  }
  
  return errors;
};
