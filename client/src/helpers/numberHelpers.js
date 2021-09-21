const MAX_STEPS = 99999999;

export const isValidInteger = (str) => {
  if(/^\+?\d+$/.test(str)) {
    return (parseInt(str, 10) <= MAX_STEPS);
  }
  return false;
}

export const formatNumberDisplay = (str) => {
  return parseInt(str).toLocaleString();
}
