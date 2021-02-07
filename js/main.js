/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= 0 && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    return false;
  }
};

const getRandomFloatInclusive = function(min, max, floatDigits) {

  if (min >= 0 && max >= 0 && floatDigits >= 0) {
    return +(Math.random() * (max - min + 1) + min).toFixed(floatDigits);
  } else {
    return false;
  }
};

const TITLES_LIST = [
  'Rustic Private Cottage with King Bed and Oceanside View.',
  'Luxury Beach House Perfect for Romantic Weekend Getaway.',
  'Enjoy Sunsets at Fully Equipped 2BR Condo at the Beach.',
];

const TYPES_LIST = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN_TIME_LIST = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_LIST = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

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

const generateRandomValue = (array) => array[getRandomIntInclusive(0, array.length -1)];
const generateRandomList = (array) => array.slice(getRandomIntInclusive(0, array.length));

const createListing = () => {
  return {
    author: {
      avatar: 'img/avatars/user' + '0' + getRandomIntInclusive(1, 8) + '.png',
    },
    offer: {
      title: generateRandomValue(TITLES_LIST),
      address: getRandomFloatInclusive(35.65000, 35.70000, 5) + ', ' + getRandomFloatInclusive(139.70000, 139.80000, 5),
      price: getRandomIntInclusive(100, 1000),
      type: generateRandomValue(TYPES_LIST),
      rooms: getRandomIntInclusive(1, 50),
      guests: getRandomIntInclusive(1, 50),
      checkin: generateRandomValue(CHECKIN_TIME_LIST),
      checkout: generateRandomValue(CHECKIN_TIME_LIST),
      features: generateRandomList(FEATURES_LIST),
      description: generateRandomValue(DESCRIPTIONS_LIST),
      photos: generateRandomList(PHOTOS_LIST),
    },
    location: {
      x: getRandomFloatInclusive(35.65000, 35.70000, 5),
      y: getRandomFloatInclusive(139.70000, 139.80000, 5),
    },
  }
};

console.log(createListing());

const similarListings = new Array(SIMILAR_LISTINGS_COUNT).fill(null).map(() => createListing());

console.log(similarListings);
