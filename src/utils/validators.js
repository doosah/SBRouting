/**
 * Validation utilities
 */

/**
 * Check if value is not empty
 */
export const required = (value, message = 'Поле обязательно для заполнения') => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return message;
  }
  return null;
};

/**
 * Validate email format
 */
export const email = (value, message = 'Неверный формат email') => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value && !emailRegex.test(value)) {
    return message;
  }
  return null;
};

/**
 * Validate phone number
 */
export const phone = (value, message = 'Неверный формат телефона') => {
  const phoneRegex = /^\+?[0-9]{10,11}$/;
  if (value && !phoneRegex.test(value.replace(/[\s()-]/g, ''))) {
    return message;
  }
  return null;
};

/**
 * Validate minimum length
 */
export const minLength = (min) => {
  return (value, message = `Минимальная длина: ${min} символов`) => {
    if (value && value.length < min) {
      return message;
    }
    return null;
  };
};

/**
 * Validate maximum length
 */
export const maxLength = (max) => {
  return (value, message = `Максимальная длина: ${max} символов`) => {
    if (value && value.length > max) {
      return message;
    }
    return null;
  };
};

/**
 * Validate numeric value
 */
export const numeric = (value, message = 'Значение должно быть числом') => {
  if (value && isNaN(Number(value))) {
    return message;
  }
  return null;
};

/**
 * Validate minimum value
 */
export const min = (minimum) => {
  return (value, message = `Минимальное значение: ${minimum}`) => {
    if (value && Number(value) < minimum) {
      return message;
    }
    return null;
  };
};

/**
 * Validate maximum value
 */
export const max = (maximum) => {
  return (value, message = `Максимальное значение: ${maximum}`) => {
    if (value && Number(value) > maximum) {
      return message;
    }
    return null;
  };
};

/**
 * Validate date format (ISO 8601)
 */
export const dateISO = (value, message = 'Неверный формат даты') => {
  if (value && isNaN(Date.parse(value))) {
    return message;
  }
  return null;
};

/**
 * Validate value is in list
 */
export const oneOf = (list) => {
  return (value, message = `Значение должно быть одним из: ${list.join(', ')}`) => {
    if (value && !list.includes(value)) {
      return message;
    }
    return null;
  };
};

/**
 * Compose multiple validators
 */
export const compose = (...validators) => {
  return (value) => {
    for (const validator of validators) {
      const error = validator(value);
      if (error) {
        return error;
      }
    }
    return null;
  };
};

/**
 * Validate form fields
 */
export const validateForm = (fields, rules) => {
  const errors = {};
  
  for (const [fieldName, validators] of Object.entries(rules)) {
    const value = fields[fieldName];
    const validatorList = Array.isArray(validators) ? validators : [validators];
    
    for (const validator of validatorList) {
      const error = validator(value);
      if (error) {
        errors[fieldName] = error;
        break;
      }
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
