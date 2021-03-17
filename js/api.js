import {showAlert} from './alert.js';

export const getData = function (onSuccess) {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then(response => response.json())
    .then(data => onSuccess(data))
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
