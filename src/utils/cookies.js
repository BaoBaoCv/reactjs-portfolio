// Cookie utility functions for managing client-side rate limiting

/**
 * Set a cookie with the given name, value, and expiration time
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {number} hours - Hours until expiration
 */
export const setCookie = (name, value, hours) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (hours * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

/**
 * Get a cookie value by name
 * @param {string} name - Cookie name
 * @returns {string|null} - Cookie value or null if not found
 */
export const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

/**
 * Delete a cookie by name
 * @param {string} name - Cookie name
 */
export const deleteCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
};

/**
 * Check if a user can perform an action based on rate limiting
 * @param {string} cookieName - Name of the cookie storing the timestamp
 * @param {number} hoursLimit - Hours between allowed actions
 * @returns {boolean} - True if action is allowed, false if rate limited
 */
export const canPerformAction = (cookieName, hoursLimit) => {
  const lastActionTime = getCookie(cookieName);
  if (!lastActionTime) return true; // No previous action recorded

  const lastTime = parseInt(lastActionTime, 10);
  const currentTime = Date.now();
  const timeDiff = currentTime - lastTime;
  const limitMs = hoursLimit * 60 * 60 * 1000;

  return timeDiff >= limitMs;
};

/**
 * Record an action timestamp in a cookie
 * @param {string} cookieName - Name of the cookie to store the timestamp
 * @param {number} hoursLimit - Hours until the rate limit resets
 */
export const recordAction = (cookieName, hoursLimit) => {
  setCookie(cookieName, Date.now().toString(), hoursLimit);
};

/**
 * Get remaining time until rate limit resets (in milliseconds)
 * @param {string} cookieName - Name of the cookie storing the timestamp
 * @param {number} hoursLimit - Hours between allowed actions
 * @returns {number} - Remaining milliseconds, or 0 if no limit active
 */
export const getRemainingTimeMs = (cookieName, hoursLimit) => {
  const lastActionTime = getCookie(cookieName);
  if (!lastActionTime) return 0;

  const lastTime = parseInt(lastActionTime, 10);
  const currentTime = Date.now();
  const timeDiff = currentTime - lastTime;
  const limitMs = hoursLimit * 60 * 60 * 1000;

  return Math.max(0, limitMs - timeDiff);
};

/**
 * Format remaining time as a human-readable string
 * @param {number} remainingMs - Remaining milliseconds
 * @returns {string} - Formatted time string
 */
export const formatRemainingTime = (remainingMs) => {
  if (remainingMs <= 0) return '';

  const hours = Math.floor(remainingMs / (1000 * 60 * 60));
  const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
};
