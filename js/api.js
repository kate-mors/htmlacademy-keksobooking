import {createSimilarPopups} from './map.js';
import {onSuccess} from './on-event.js';
import {showAlert} from './util.js';

export const getData = function () {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then(onSuccess)
    .then(response => response.json())
    .then(data => createSimilarPopups(data.slice(0, 10)))
    .catch(() => {
      showAlert('Не удалось получить данные. Попробуйте обновить страницу');
    });
};

export const sendData = function (onSuccess, onFail, body) {
  return fetch('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};
