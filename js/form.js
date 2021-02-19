import {pricesPerNight} from './data.js';

const adElementType = document.querySelector('#type');
const adElementPrice = document.querySelector('#price');
const adElementTimeIn = document.querySelector('#timein');
const adElementTimeOut = document.querySelector('#timeout');

const selectChangeHandler = function () {
  adElementPrice.min = pricesPerNight[adElementType.value];
  adElementPrice.placeholder = pricesPerNight[adElementType.value];
};

adElementType.addEventListener('change', selectChangeHandler);

adElementTimeIn.addEventListener('change', function () {
  adElementTimeOut.value = adElementTimeIn.value;
});

adElementTimeOut.addEventListener('change', function () {
  adElementTimeIn.value = adElementTimeOut.value;
});
