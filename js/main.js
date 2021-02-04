'use strict';

const getRandom = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= 0 && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } else {return false;
  }
}

getRandom(10.09, 0.09);


const getRandomFloat = function (min, max, floatLength) {

  if (min >= 0 && max >= 0 && floatLength >= 0) {
    return +(Math.random() * (max - min + 1) + min).toFixed(floatLength);
  } else {return false;
  }
}

getRandomFloat(5.098, 3.789, 7);
