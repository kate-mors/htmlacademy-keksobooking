import {sendData} from './api.js';
import {TITLE_MAX_LENGTH, TITLE_MIN_LENGTH, PRICE_MAX, pricesPerNight, capacity} from './data.js';
import {onSuccess, onFormSend, onScreenClick, onEscClick, onErrorButtonClick} from './on-event.js';
import {resetMainMarker} from './map.js';

const mainBlock = document.querySelector('.promo');
export const form = document.querySelector('.ad-form');
const resetButton = document.querySelector('.ad-form__reset');
const elementType = document.querySelector('#type');
const elementPrice = document.querySelector('#price');
const elementTimeIn = document.querySelector('#timein');
const elementTimeOut = document.querySelector('#timeout');
const elementTitle = document.querySelector('#title');
const elementRooms = document.querySelector('#room_number');
const elementGuests = document.querySelector('#capacity');
export const addressField = document.querySelector('#address');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
export const errorButton = errorMessage.querySelector('.error__button');

const validateRoomsGuests = function () {
  const validateCapacity = capacity[elementRooms.selectedIndex].includes(elementGuests.selectedIndex)
  if (validateCapacity) {
    elementGuests.setCustomValidity('');
  } else {
    elementGuests.setCustomValidity('Некорректное значение! Количество комнат не может быть меньше количества гостей.');
  }
  elementGuests.reportValidity();
};

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
  const value = elementPrice.valueAsNumber;

  if (value > PRICE_MAX) {
    elementPrice.setCustomValidity(`Максимальная цена за ночь ${PRICE_MAX}`);
  } else if (value < pricesPerNight[elementType.value]) {
    elementPrice.classList.add('invalid');
    elementPrice.setCustomValidity(`Для этого типа минимальная цена ${pricesPerNight[elementType.value]}`);
  } else {
    elementPrice.classList.remove('invalid');
    elementPrice.setCustomValidity('');
  }
  elementPrice.reportValidity();
};

const elementRoomsChangeHandler = function () {
  validateRoomsGuests();
};

const elementGuestsChangeHandler = function () {
  validateRoomsGuests();
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
};

const elementTitleInputHandler = function () {
  validateTitle();
};

const elementPriceInputHandler = function () {
  validatePrice();
};

const showSuccessMessage = function () {
  mainBlock.appendChild(successMessage);
  onScreenClick(successMessage);
  onEscClick(successMessage);
};

const showErrorMessage = function () {
  mainBlock.appendChild(errorMessage);
  onScreenClick(errorMessage);
  onEscClick(errorMessage);
  onErrorButtonClick(errorMessage);
};

elementType.addEventListener('change', elementTypeChangeHandler);
elementTimeIn.addEventListener('change', elementTimeInChangeHandler);
elementTimeOut.addEventListener('change', elementTimeOutChangeHandler);
elementTitle.addEventListener('input', elementTitleInputHandler);
elementPrice.addEventListener ('input', elementPriceInputHandler);
elementRooms.addEventListener('change', elementRoomsChangeHandler);
elementGuests.addEventListener('change', elementGuestsChangeHandler);

resetButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  form.reset();
  resetMainMarker();
  onFormSend();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  sendData(formData)
    .then(onSuccess)
    .then(() => form.reset())
    .then(() => resetMainMarker())
    .then(() => onFormSend())
    .then(() => showSuccessMessage())
    .catch(() => showErrorMessage())
});
