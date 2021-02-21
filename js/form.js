import {pricesPerNight} from './data.js';

const adElementType = document.querySelector('#type');
const adElementPrice = document.querySelector('#price');
const adElementTimeIn = document.querySelector('#timein');
const adElementTimeOut = document.querySelector('#timeout');

const typeChangeHandler = function () {
  adElementPrice.min = pricesPerNight[adElementType.value];
  adElementPrice.placeholder = pricesPerNight[adElementType.value];
};

const onTimeInChange = function () {
  adElementTimeOut.value = adElementTimeIn.value;
};

const onTimeOutChange = function () {
  adElementTimeIn.value = adElementTimeOut.value;
}

adElementType.addEventListener('change', typeChangeHandler);
adElementTimeIn.addEventListener('change', onTimeInChange);
adElementTimeOut.addEventListener('change', onTimeOutChange);
