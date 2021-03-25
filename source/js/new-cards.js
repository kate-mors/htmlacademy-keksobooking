import {ROOMS_LIST, GUESTS_LIST, listingTypes} from './data.js';
import {generateWordsEnding} from './util.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const popupPhotos = cardTemplate.querySelector('.popup__photos');

const generatePopupContent = function (element, content) {
  if (element.textContent.length > 0) {
    return element.textContent = content;
  } else {
    return element.remove()
  }
}

const generatePopupPhotos = function (element, array) {
  const popupPhoto = popupPhotos.querySelector('.popup__photo');

  element.innerHTML = '';

  if (array.length > 0) {
    array.forEach(function (src) {
      const newPhoto = popupPhoto.cloneNode(true)
      newPhoto.src = src;
      element.appendChild(newPhoto);
    })
  } else {
    element.remove()
  }
}

export const createSimilarCard = function (data) {

  const similarPopup = cardTemplate.cloneNode(true);

  generatePopupContent(similarPopup.querySelector('.popup__title'), data.offer.title);
  generatePopupContent(similarPopup.querySelector('.popup__text--address'), data.offer.address);
  generatePopupContent(similarPopup.querySelector('.popup__text--price'), `${data.offer.price} ₽/ночь`);
  generatePopupContent(similarPopup.querySelector('.popup__type'), listingTypes[data.offer.type]);
  generatePopupContent(similarPopup.querySelector('.popup__text--capacity'), `${data.offer.rooms} ${generateWordsEnding(data.offer.rooms, ROOMS_LIST)} для ${data.offer.guests} ${generateWordsEnding(data.offer.guests, GUESTS_LIST)}`);
  generatePopupContent(similarPopup.querySelector('.popup__text--time'), `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`);
  generatePopupContent(similarPopup.querySelector('.popup__features'), Object.values(data.offer.features).join(', '));
  generatePopupContent(similarPopup.querySelector('.popup__description'), data.offer.description);
  generatePopupPhotos(similarPopup.querySelector('.popup__photos'), data.offer.photos);
  similarPopup.querySelector('.popup__avatar').src = data.author.avatar;

  return similarPopup;
};
