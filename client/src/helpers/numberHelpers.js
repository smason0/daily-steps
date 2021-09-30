const MAX_STEPS = 99999999;

/**
 * Determines if the provided string is a positive integer less than the max allowed value.
 * @param {string} str The given string to validate.
 * @returns True if valid, false otherwise.
 */
export const isValidInteger = (str) => {
  if(/^\+?\d+$/.test(str)) {
    return (parseInt(str, 10) <= MAX_STEPS);
  }
  return false;
}

/**
 * Formats the number string based on the locale.
 * @param {string} str The numeric string to format.
 * @returns The formatted number string.
 */
export const formatNumberDisplay = (str) => {
  return parseInt(str).toLocaleString();
}
