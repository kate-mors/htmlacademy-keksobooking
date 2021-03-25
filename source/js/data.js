export const ROOMS_LIST = ['комната', 'комнаты', 'комнат'];

export const GUESTS_LIST = ['гостя', 'гостей', 'гостей'];

export const SLICE = {
  min: 0,
  max: 10,
};

export const TIMEOUT = 5000;

export const RENDER_DELAY = 500;

//валидация формы

export const TITLE_MIN_LENGTH = 30;

export const TITLE_MAX_LENGTH = 100;

export const PRICE_MAX = 1000000;

//настройки координат карты

export const TOKYO_COORDINATES = {
  x: 35.69093,
  y: 139.78013,
};

export const ZOOM = 9;

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
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

export const capacity = {
  0: [2],
  1: [1, 2],
  2: [0, 1, 2],
  3: [3],
};

export const priceRange = {
  low: 10000,
  middle: 50000,
  high: 1000000,
};
