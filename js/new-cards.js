import {similarListings} from './listing.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardContainer = document.querySelector('#map-canvas');
const listingsFragment = new DocumentFragment();
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

const ListingTypes = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
}

const ROOMS_LIST = ['комната', 'комнаты', 'комнат'];
const GUESTS_LIST = ['гостя', 'гостей', 'гостей']

const generateWordsEnding = function (number, array) {
  if (number === 1) {
    return array[0];
  } if (number > 1 && number < 5) {
    return array [1];
  }
  if (number === 0 || number >=5) {
    return array[2];
  }
}

similarListings.forEach(function({author, offer}) {
  const similarPopup = cardTemplate.cloneNode(true);

  similarPopup.querySelector('.popup__title').textContent = offer.title;
  similarPopup.querySelector('.popup__text--address').textContent = offer.address;
  similarPopup.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  similarPopup.querySelector('.popup__type').textContent = ListingTypes[offer.type];
  similarPopup.querySelector('.popup__text--capacity').textContent = offer.rooms + ' ' + generateWordsEnding(offer.rooms, ROOMS_LIST) + ' для ' + offer.guests + ' ' + generateWordsEnding(offer.guests, GUESTS_LIST);
  similarPopup.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin +', выезд до ' + offer.checkout;
  similarPopup.querySelector('.popup__features').textContent = Object.values(offer.features).join(', ');
  similarPopup.querySelector('.popup__description').textContent = offer.description;
  similarPopup.querySelector('.popup__photos').innerHTML = '';
  similarPopup.querySelector('.popup__photos').append(generatePopupPhotos(offer.photos));
  similarPopup.querySelector('.popup__avatar').src = author.avatar;

  return listingsFragment.appendChild(similarPopup);
})

cardContainer.appendChild(listingsFragment.firstChild);
