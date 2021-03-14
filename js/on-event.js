import {showAlert} from './util.js';
import {addressField} from './form.js';
import {TOKYO_COORDINATES, FLOAT_DIGITS} from './data.js';
import {enableElements} from './disable.js';

export const onMapLoad = function() {
  enableElements();
  onFormReset();
};

export const onFormReset = function () {
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

export const checkResponse = function (response) {
  if (response.ok) {
    return response;
  } else {
    showAlert('Не удалось получить данные. Попробуйте обновить страницу');
  }
};

const isEscEvent = function (evt) {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export const showMessage = function (parent, element) {
  parent.appendChild(element);

  const elementClickHandler = function () {
    element.remove();
    element.removeEventListener('click', elementClickHandler);
  };


  const documentКeydownHandler = function (evt) {
    if (isEscEvent(evt)) {
      element.remove();
      document.removeEventListener('keydown', documentКeydownHandler);
    }
  };

  element.addEventListener('click', elementClickHandler);
  document.addEventListener('keydown', documentКeydownHandler);
};
