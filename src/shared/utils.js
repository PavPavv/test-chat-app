export const getClockTime = time => {
  const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

  return `${hours}:${minutes}`;
};

export const isEmptyObj = obj => {
  return (Object.keys(obj).length) ? false : true;
};