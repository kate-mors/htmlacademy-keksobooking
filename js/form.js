import {TITLE_MAX_LENGTH, TITLE_MIN_LENGTH, PRICE_MAX, pricesPerNight, capacity} from './data.js';
//import {disable, enable} from './util.js';

const elementType = document.querySelector('#type');
const elementPrice = document.querySelector('#price');
const elementTimeIn = document.querySelector('#timein');
const elementTimeOut = document.querySelector('#timeout');
const elementTitle = document.querySelector('#title');
const elementRooms = document.querySelector('#room_number');
const elementGuests = document.querySelector('#capacity');

const elementRoomsChangeHandler = function () {
  const validateCapacity = capacity[elementRooms.selectedIndex].includes(elementGuests.selectedIndex)

  if (validateCapacity) {
    elementGuests.setCustomValidity('');
  } else {
    elementGuests.setCustomValidity('Некорректное значение! Количество комнат не может быть меньше количества гостей.');
  }
  elementGuests.reportValidity();
};

const elementTypeChangeHandler = function () {
  elementPrice.min = pricesPerNight[elementType.value];
  elementPrice.placeholder = pricesPerNight[elementType.value];
};

const elementTimeInChangeHandler = function () {
  elementTimeOut.value = elementTimeIn.value;
};

const elementTimeOutChangeHandler = function () {
  elementTimeIn.value = elementTimeOut.value;
}

const validateTitle = function () {
  const valueLength = elementTitle.value.length;

  if (valueLength < TITLE_MIN_LENGTH) {
    elementTitle.setCustomValidity(`Ещё ${(TITLE_MIN_LENGTH - valueLength)} симв.`);
  } else if (valueLength > TITLE_MAX_LENGTH) {
    elementTitle.setCustomValidity(`Удалите лишние ${(valueLength - TITLE_MAX_LENGTH)} симв.`);
  } else {
    elementTitle.setCustomValidity('');
  }

  elementTitle.reportValidity();
};

const validatePrice = function () {
  const value = elementPrice.value;

  if (value > PRICE_MAX) {
    elementPrice.setCustomValidity(`Максимальная цена за ночь ${PRICE_MAX}`);
  } else if (value < pricesPerNight[elementType.value]) {
    elementPrice.classList.add('invalid');
    elementPrice.setCustomValidity(`Для этого типа минимальная цена ${pricesPerNight[elementType.value]}`);
  } else {
    elementPrice.classList.remove('invalid');
  }
};

elementType.addEventListener('change', elementTypeChangeHandler);
elementTimeIn.addEventListener('change', elementTimeInChangeHandler);
elementTimeOut.addEventListener('change', elementTimeOutChangeHandler);
elementTitle.addEventListener('input', validateTitle);
elementPrice.addEventListener ('input', validatePrice);
elementRooms.addEventListener('change', elementRoomsChangeHandler);
elementGuests.addEventListener('change', elementRoomsChangeHandler);
