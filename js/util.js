const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    return false;
  }
};

const getRandomFloatInclusive = function(min, max, floatDigits) {

  if (min >= 0 && max > min && floatDigits > 0) {
    return +(Math.random() * (max - min) + min).toFixed(floatDigits);
  } else {
    return false;
  }
};

const generateRandomValue = function(array) {
  return array[getRandomIntInclusive(0, array.length - 1)];
};

const generateRandomList = function(array) {
  return array.slice(getRandomIntInclusive(0, array.length));
};

export {
  getRandomIntInclusive,
  getRandomFloatInclusive,
  generateRandomValue,
  generateRandomList
};
