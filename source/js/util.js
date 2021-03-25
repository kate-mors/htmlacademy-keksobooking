export const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};

export const getRandomFloatInclusive = function(min, max, floatDigits) {

  if (min >= 0 && max > min && floatDigits > 0) {
    return +(Math.random() * (max - min) + min).toFixed(floatDigits);
  }
};

export const generateRandomValue = function(array) {
  return array[getRandomIntInclusive(0, array.length - 1)];
};

export const generateRandomList = function(array) {
  return array.slice(getRandomIntInclusive(0, array.length));
};

export const shuffleArray = function(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const generateWordsEnding = function (number, array) {
  if (number === 1) {
    return array[0];
  } if (number > 1 && number < 5) {
    return array [1];
  }
  if (number === 0 || number >=5) {
    return array[2];
  }
};

export const disable = function (parent) {
  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i];
    child.disabled = true;
  }
};

export const enable = function (parent) {
  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i];
    child.disabled = false
  }
};
