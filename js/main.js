'use strict';

const AVATAR_INDEX = {
  min: 1,
  max: 8,
};

const LOCATION_X = {
  min: 35.65000,
  max: 35.70000,
};

const LOCATION_Y = {
  min: 139.70000,
  max: 139.80000,
};

const FLOAT_DIGITS = 5;

const PRICE = {
  min: 100,
  max: 1000,
};

const ROOMS = {
  min: 1,
  max: 50,
};

const GUESTS = {
  min: 1,
  max: 50,
};

const TITLES_LIST = [
  'Rustic Private Cottage with King Bed and Oceanside View.',
  'Luxury Beach House Perfect for Romantic Weekend Getaway.',
  'Enjoy Sunsets at Fully Equipped 2BR Condo at the Beach.',
];

const TYPES_LIST = ['palace', 'flat', 'house', 'bungalow'];

const CHECKIN_TIME_LIST = ['12:00', '13:00', '14:00'];

const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const DESCRIPTIONS_LIST = [
  'This bright loft is perfect to relax, just up the road from the heart of the city.',
  'Have a glass of wine while enjoying Netflix on the comfortable sofa after exploring local culture.',
  '10 minute bus ride to downtown. Super safe and quiet neighborhood.',
];

const PHOTOS_LIST = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const SIMILAR_LISTINGS_COUNT = 10;

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

const shuffleArray = function(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const generateRandomList = function(array) {
  return array.slice(getRandomIntInclusive(0, array.length));
};

const createListing = () => {
  const location = {
    x: getRandomFloatInclusive(LOCATION_X.min, LOCATION_X.max, FLOAT_DIGITS),
    y: getRandomFloatInclusive(LOCATION_Y.min, LOCATION_Y.max, FLOAT_DIGITS),
  };

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomIntInclusive(AVATAR_INDEX.min, AVATAR_INDEX.max) + '.png',
    },
    offer: {
      title: generateRandomValue(TITLES_LIST),
      address: location.x + ', ' + location.y,
      price: getRandomIntInclusive(PRICE.min, PRICE.max),
      type: generateRandomValue(TYPES_LIST),
      rooms: getRandomIntInclusive(ROOMS.min, ROOMS.max),
      guests: getRandomIntInclusive(GUESTS.min, GUESTS.max),
      checkin: generateRandomValue(CHECKIN_TIME_LIST),
      checkout: generateRandomValue(CHECKIN_TIME_LIST),
      features: generateRandomList(shuffleArray(FEATURES_LIST)),
      description: generateRandomValue(DESCRIPTIONS_LIST),
      photos: generateRandomList(shuffleArray(PHOTOS_LIST)),
    },
    location: {
      x: location.x,
      y: location.y,
    },
  }
};

const similarListings = new Array(SIMILAR_LISTINGS_COUNT).fill(null).map(() => createListing());

similarListings;
