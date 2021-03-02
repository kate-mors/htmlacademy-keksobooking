export const AVATAR_INDEX = {
  min: 1,
  max: 8,
};

export const LOCATION_X = {
  min: 35.65000,
  max: 35.70000,
};

export const LOCATION_Y = {
  min: 139.70000,
  max: 139.80000,
};

export const FLOAT_DIGITS = 5;

export const PRICE = {
  min: 100,
  max: 1000,
};

export const ROOMS = {
  min: 1,
  max: 20,
};

export const GUESTS = {
  min: 1,
  max: 20,
};

export const TITLES_LIST = [
  'Rustic Private Cottage with King Bed and Oceanside View.',
  'Luxury Beach House Perfect for Romantic Weekend Getaway.',
  'Enjoy Sunsets at Fully Equipped 2BR Condo at the Beach.',
];

export const TYPES_LIST = ['palace', 'flat', 'house', 'bungalow'];

export const CHECKIN_TIME_LIST = ['12:00', '13:00', '14:00'];

export const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

export const DESCRIPTIONS_LIST = [
  'This bright loft is perfect to relax, just up the road from the heart of the city.',
  'Have a glass of wine while enjoying Netflix on the comfortable sofa after exploring local culture.',
  '10 minute bus ride to downtown. Super safe and quiet neighborhood.',
];

export const PHOTOS_LIST = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

export const SIMILAR_LISTINGS_COUNT = 10;

export const ROOMS_LIST = ['комната', 'комнаты', 'комнат'];

export const GUESTS_LIST = ['гостя', 'гостей', 'гостей'];

//валидация формы

export const TITLE_MIN_LENGTH = 30;

export const TITLE_MAX_LENGTH = 100;

export const PRICE_MAX = 1000000;

//настройки координат карты

export const TOKYO_COORDINATES = {
  x: 35.66093,
  y: 139.78013,
};

export const ZOOM = 12.5;

export const MAIN_PIN = {
  size: 52,
  anchor: 26,
}

export const PIN = {
  size: 40,
  anchor: 20,
}

//словари
export const listingTypes = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
};

export const pricesPerNight = {
  'bungalow': '0',
  'flat': '1000',
  'house': '5000',
  'palace': '10000',
};

export const capacity = {
  0: [2],
  1: [1, 2],
  2: [0, 1, 2],
  3: [3],
};

/*export const capacity = {
  0: ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '4': ['0'],
};*/
