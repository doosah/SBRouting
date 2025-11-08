/**
 * Formatting utilities
 */

/**
 * Format currency in Russian Rubles
 */
export const formatCurrency = (amount) => {
  if (amount === null || amount === undefined) {
    return '0 ₽';
  }
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * Format number with Russian locale
 */
export const formatNumber = (number, decimals = 0) => {
  if (number === null || number === undefined) {
    return '0';
  }
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number);
};

/**
 * Format date in Russian format (DD.MM.YYYY)
 */
export const formatDate = (date) => {
  if (!date) {
    return '';
  }
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
};

/**
 * Format date with time
 */
export const formatDateTime = (date) => {
  if (!date) {
    return '';
  }
  const d = new Date(date);
  return new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d);
};

/**
 * Format date to ISO string (YYYY-MM-DD)
 */
export const formatDateISO = (date) => {
  if (!date) {
    return '';
  }
  const d = new Date(date);
  return d.toISOString().split('T')[0];
};

/**
 * Format relative time (e.g., "2 дня назад")
 */
export const formatRelativeTime = (date) => {
  if (!date) {
    return '';
  }
  const d = new Date(date);
  const now = new Date();
  const diffMs = now - d;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) {
    return 'только что';
  } else if (diffMin < 60) {
    return `${diffMin} мин. назад`;
  } else if (diffHour < 24) {
    return `${diffHour} ч. назад`;
  } else if (diffDay < 7) {
    return `${diffDay} дн. назад`;
  } else {
    return formatDate(d);
  }
};

/**
 * Format percentage
 */
export const formatPercent = (value, decimals = 1) => {
  if (value === null || value === undefined) {
    return '0%';
  }
  return `${formatNumber(value, decimals)}%`;
};

/**
 * Format phone number
 */
export const formatPhone = (phone) => {
  if (!phone) {
    return '';
  }
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
  }
  return phone;
};

/**
 * Truncate text
 */
export const truncate = (text, maxLength = 50) => {
  if (!text || text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Capitalize first letter
 */
export const capitalize = (text) => {
  if (!text) {
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Format file size
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};
