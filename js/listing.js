import {
  getRandomIntInclusive,
  getRandomFloatInclusive,
  generateRandomValue,
  generateRandomList
} from './util.js';

import {
  AVATAR_INDEX,
  LOCATION_X,
  LOCATION_Y,
  FLOAT_DIGITS,
  PRICE,
  ROOMS,
  GUESTS,
  TITLES_LIST,
  TYPES_LIST,
  CHECKIN_TIME_LIST,
  FEATURES_LIST,
  DESCRIPTIONS_LIST,
  PHOTOS_LIST
} from './data.js';

const shuffleArray = function(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
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

export {createListing};
