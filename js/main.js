const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let unclear = (max - min + 1);
  return Math.floor(Math.random() * unclear + min);
}

getRandomIntInclusive(2.456, 7.09);


const getRandomFloatInclusive = function (min, max, floatLength) {
  let unclear = (max - min + 1);
  return +(Math.random() * unclear + min).toFixed(floatLength);
}

getRandomFloatInclusive(5.098, 3.789, 2);
