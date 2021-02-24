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

const createSimilarPopup = function ({author, offer}) {
  const similarPopup = cardTemplate.cloneNode(true);

  similarPopup.querySelector('.popup__title').textContent = offer.title;
  similarPopup.querySelector('.popup__text--address').textContent = offer.address;
  similarPopup.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  similarPopup.querySelector('.popup__type').textContent = listingTypes[offer.type];
  similarPopup.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${generateWordsEnding(offer.rooms, ROOMS_LIST)} для ${offer.guests} ${generateWordsEnding(offer.guests, GUESTS_LIST)}`;
  similarPopup.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  similarPopup.querySelector('.popup__features').textContent = Object.values(offer.features).join(', ');
  similarPopup.querySelector('.popup__description').textContent = offer.description;
  similarPopup.querySelector('.popup__photos').innerHTML = '';
  similarPopup.querySelector('.popup__photos').append(generatePopupPhotos(offer.photos));
  similarPopup.querySelector('.popup__avatar').src = author.avatar;

  return similarPopup;
};

export {createSimilarPopup};
