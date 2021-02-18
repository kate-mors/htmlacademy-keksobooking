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
  max: 20,
};

const GUESTS = {
  min: 1,
  max: 20,
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

const ROOMS_LIST = ['комната', 'комнаты', 'комнат'];

const GUESTS_LIST = ['гостя', 'гостей', 'гостей'];

const listingTypes = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
};

const pricesPerNight = {
  'bungalow': '0',
  'flat': '1000',
  'house': '5000',
  'palace': '10000',
}

export {
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
  SIMILAR_LISTINGS_COUNT,
  ROOMS_LIST,
  GUESTS_LIST,
  listingTypes,
  pricesPerNight
};
