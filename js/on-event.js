import {showAlert} from './util.js';
import {enableElements} from './disable.js';
import {addressField, errorButton} from './form.js';
import {TOKYO_COORDINATES, FLOAT_DIGITS} from './data.js';

export const onMapLoad = function() {
  enableElements();
  addressField.readOnly = true;
  addressField.value = TOKYO_COORDINATES.x + ', ' + TOKYO_COORDINATES.y;
};

export const onMarkerMoved = function (evt) {
  const address = {
    lat: evt.target.getLatLng().lat,
    lng: evt.target.getLatLng().lng,
  };
  addressField.value = address.lat.toFixed(FLOAT_DIGITS) + ', ' + address.lng.toFixed(FLOAT_DIGITS);
};

export const onSuccess = function (response) {
  if (response.ok) {
    return response;
  } else {
    showAlert('Не удалось получить данные. Попробуйте обновить страницу');
  }
};

export const onFormSend = function () {
  addressField.readOnly = true;
  addressField.value = TOKYO_COORDINATES.x + ', ' + TOKYO_COORDINATES.y;
};

export const onScreenClick = function (element) {
  document.addEventListener('click', function () {
    element.classList.add('visually-hidden');
  });
};

const isEscEvent = function (evt) {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export const onEscClick = function (element) {
  document.addEventListener('keydown', function (evt) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      element.classList.add('visually-hidden');
    }
  });
};

export const onErrorButtonClick = function (element) {
  errorButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    element.classList.add('visually-hidden');
  })
};
