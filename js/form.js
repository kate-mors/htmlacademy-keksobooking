import {pricesPerNight} from './data.js';

const elementType = document.querySelector('#type');
const elementPrice = document.querySelector('#price');
const elementTimeIn = document.querySelector('#timein');
const elementTimeOut = document.querySelector('#timeout');

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

elementType.addEventListener('change', elementTypeChangeHandler);
elementTimeIn.addEventListener('change', elementTimeInChangeHandler);
elementTimeOut.addEventListener('change', elementTimeOutChangeHandler);
