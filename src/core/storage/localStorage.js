/**
 * LocalStorage wrapper with error handling and JSON serialization
 */

/**
 * Save data to localStorage
 */
export const save = (key, data) => {
  try {
    const serialized = JSON.stringify(data);
    localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    console.error(`Error saving to localStorage (${key}):`, error);
    return false;
  }
};

/**
 * Load data from localStorage
 */
export const load = (key, defaultValue = null) => {
  try {
    const serialized = localStorage.getItem(key);
    if (serialized === null) {
      return defaultValue;
    }
    return JSON.parse(serialized);
  } catch (error) {
    console.error(`Error loading from localStorage (${key}):`, error);
    return defaultValue;
  }
};

/**
 * Remove data from localStorage
 */
export const remove = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing from localStorage (${key}):`, error);
    return false;
  }
};

/**
 * Clear all data from localStorage
 */
export const clear = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};

/**
 * Check if key exists in localStorage
 */
export const has = (key) => {
  return localStorage.getItem(key) !== null;
};

/**
 * Get all keys from localStorage
 */
export const getAllKeys = () => {
  return Object.keys(localStorage);
};

/**
 * Get localStorage size in bytes
 */
export const getSize = () => {
  let size = 0;
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      size += key.length + localStorage.getItem(key).length;
    }
  }
  return size;
};

/**
 * Get localStorage size in human-readable format
 */
export const getSizeFormatted = () => {
  const size = getSize();
  const units = ['bytes', 'KB', 'MB', 'GB'];
  let unitIndex = 0;
  let formattedSize = size;

  while (formattedSize >= 1024 && unitIndex < units.length - 1) {
    formattedSize /= 1024;
    unitIndex++;
  }

  return `${formattedSize.toFixed(2)} ${units[unitIndex]}`;
};
