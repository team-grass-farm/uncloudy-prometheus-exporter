const getRandomValue = ({ range, isInteger }) => {
  let min = range.min;
  let max = range.max;

  if (isInteger) {
    return Math.random() * (max - min) + min;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
