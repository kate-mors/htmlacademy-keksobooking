import {
  getRandomIntInclusive,
  getRandomFloatInclusive,
  generateRandomValue,
  generateRandomList,
  shuffleArray
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
  PHOTOS_LIST,
  SIMILAR_LISTINGS_COUNT
} from './data.js';

export const createListing = () => {
  const location = {
    lat: getRandomFloatInclusive(LOCATION_X.min, LOCATION_X.max, FLOAT_DIGITS),
    lng: getRandomFloatInclusive(LOCATION_Y.min, LOCATION_Y.max, FLOAT_DIGITS),
  };

  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntInclusive(AVATAR_INDEX.min, AVATAR_INDEX.max)}.png`,
    },
    offer: {
      title: generateRandomValue(TITLES_LIST),
      address: `${location.x}, ${location.y}`,
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
      lat: location.lat,
      lng: location.lng,
    },
  }
};

export const similarListings = new Array(SIMILAR_LISTINGS_COUNT).fill(null).map(() => createListing());
