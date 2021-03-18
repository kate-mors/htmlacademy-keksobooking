import {ROOMS_LIST, GUESTS_LIST, listingTypes} from './data.js';
import {generateWordsEnding} from './util.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const popupPhotos = cardTemplate.querySelector('.popup__photos');

const generatePopupPhotos = function (array) {
  const popupPhoto = popupPhotos.querySelector('.popup__photo');
  const photosListFragment = new DocumentFragment();

  array.forEach(function (src) {
    const newPhoto = popupPhoto.cloneNode(true)
    newPhoto.src = src;
    photosListFragment.appendChild(newPhoto);
  })
  return photosListFragment;
}

export const createSimilarCard = function (data) {

  const similarPopup = cardTemplate.cloneNode(true);

  similarPopup.querySelector('.popup__title').textContent = data.offer.title;
  similarPopup.querySelector('.popup__text--address').textContent = data.offer.address;
  similarPopup.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;
  similarPopup.querySelector('.popup__type').textContent = listingTypes[data.offer.type];
  similarPopup.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} ${generateWordsEnding(data.offer.rooms, ROOMS_LIST)} для ${data.offer.guests} ${generateWordsEnding(data.offer.guests, GUESTS_LIST)}`;
  similarPopup.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  similarPopup.querySelector('.popup__features').textContent = Object.values(data.offer.features).join(', ');
  similarPopup.querySelector('.popup__description').textContent = data.offer.description;
  similarPopup.querySelector('.popup__photos').innerHTML = '';
  similarPopup.querySelector('.popup__photos').append(generatePopupPhotos(data.offer.photos));
  similarPopup.querySelector('.popup__avatar').src = data.author.avatar;
  return similarPopup;
};
