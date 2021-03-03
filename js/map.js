/* global L:readonly */

import {enableElements} from './disable.js';
import {similarListings} from './listing.js';
import {
  FLOAT_DIGITS,
  TOKYO_COORDINATES,
  ZOOM,
  MAIN_PIN,
  PIN
} from './data.js';
import {createSimilarPopup} from './new-cards.js';

const addressField = document.querySelector('#address');

if (window.L === undefined) {
  alert('Карта временно не работает!');
  delete window['L'];
} else {
  const map = L.map('map-canvas', {
    dragging: !L.Browser.mobile,
    tap: false,
  });

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [MAIN_PIN.size, MAIN_PIN.size],
    iconAnchor: [MAIN_PIN.anchor, MAIN_PIN.size],
  });

  const pinIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [PIN.size, PIN.size],
    iconAnchor: [PIN.anchor, PIN.size],
  });

  const mainMarker = L.marker({
    lat: TOKYO_COORDINATES.x,
    lng: TOKYO_COORDINATES.y,
  }, {
    draggable: true,
    icon: mainPinIcon,
  });

  const onMarkerMoved = function(evt) {
    const address = {
      lat: evt.target.getLatLng().lat,
      lng: evt.target.getLatLng().lng,
    };
    addressField.value = address.lat.toFixed(FLOAT_DIGITS) + ', ' + address.lng.toFixed(FLOAT_DIGITS);
  }

  const onMapLoad = function() {
    enableElements();
    addressField.readOnly = true;
    addressField.value = TOKYO_COORDINATES.x + ', ' + TOKYO_COORDINATES.y;
  }

  map
    .on('load', onMapLoad)
    .setView({
      lat: TOKYO_COORDINATES.x,
      lng: TOKYO_COORDINATES.y,
    }, ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      touchZoom: false,
    },
  ).addTo(map);

  mainMarker.addTo(map);

  mainMarker.on('moveend', onMarkerMoved)

  similarListings.forEach(function({author, offer, location}) {
    const smallMarker = L.marker({
      lat: location.x,
      lng: location.y,
    }, {
      draggable: false,
      icon: pinIcon,
    });
    smallMarker
      .addTo(map)
      .bindPopup(createSimilarPopup({author, offer}), {keepInView: true});
  });
}
