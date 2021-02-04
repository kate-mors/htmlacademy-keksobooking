'use strict';

const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= 0 && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    return false;
  }
}

getRandomIntInclusive(10.09, 0.09);


const getRandomFloatInclusive = function(min, max, floatDigits) {

  if (min >= 0 && max >= 0 && floatDigits >= 0) {
    return +(Math.random() * (max - min + 1) + min).toFixed(floatDigits);
  } else {
    return false;
  }
}

getRandomFloatInclusive(5.098, 3.789, 7);
