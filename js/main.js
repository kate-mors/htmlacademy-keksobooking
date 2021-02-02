const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let unclear = (max - min + 1);
  return Math.floor(Math.random() * unclear + min);
}

console.log(getRandomIntInclusive (4.89, 4.89));

const getRandomFloatInclusive = function (min, max, floatLength) {
  let unclear = (max - min + 1);
  return +(Math.random() * unclear + min).toFixed(floatLength);
}

console.log(getRandomFloatInclusive (4.89, 4.89, 5));
