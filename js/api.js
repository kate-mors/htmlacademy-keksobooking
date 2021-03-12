import {SLICE} from './data.js';
import {createSimilarPopups} from './map.js';
import {onSuccess} from './on-event.js';
import {showAlert} from './util.js';

export const getData = function () {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then(onSuccess)
    .then(response => response.json())
    .then(data => createSimilarPopups(data.slice(SLICE.min, SLICE.max)))
    .catch(() => {
      showAlert('Не удалось получить данные. Попробуйте обновить страницу');
    });
};

export const sendData = function (formData) {
  return fetch('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    });
};
