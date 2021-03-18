/* global L:readonly */

import {disableElements} from './disable.js';
import {TOKYO_COORDINATES, ZOOM, MAIN_PIN, PIN} from './data.js';
import {createSimilarCard} from './new-cards.js';
import {onMapLoad, onMarkerMoved} from './on-event.js';
import {getData} from './api.js';

let map;
let mainMarker;
let smallMarker;
export let createSimilarPopups;

if (window.L) {
  map = L.map('map-canvas', {
    dragging: !L.Browser.mobile,
    tap: false,
  });

  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [MAIN_PIN.size, MAIN_PIN.size],
    iconAnchor: [MAIN_PIN.anchor, MAIN_PIN.size],
  });

  const pinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [PIN.size, PIN.size],
    iconAnchor: [PIN.anchor, PIN.size],
  });

  mainMarker = L.marker({
    lat: TOKYO_COORDINATES.x,
    lng: TOKYO_COORDINATES.y,
  }, {
    draggable: true,
    icon: mainPinIcon,
  });

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      touchZoom: false,
    },
  ).addTo(map);

  mainMarker.addTo(map);
  mainMarker.on('moveend', onMarkerMoved)

  createSimilarPopups = function (similarListings) {
    return similarListings.forEach(function(popup) {
      smallMarker = L.marker({
        lat: popup.location.lat,
        lng: popup.location.lng,
      },{
        draggable: false,
        icon: pinIcon,
      });

      smallMarker
        .addTo(map)
        .bindPopup(createSimilarCard(popup), {keepInView: true})
    });
  };

} else {
  disableElements();
}

export const createMap = function () {
  map
    .on('load', () => {
      onMapLoad();
      getData((data) => {
        createSimilarPopups(data);
      })
    })
    .setView({
      lat: TOKYO_COORDINATES.x,
      lng: TOKYO_COORDINATES.y,
    }, ZOOM);
};

export const resetMainMarker = function () {
  mainMarker.setLatLng([TOKYO_COORDINATES.x, TOKYO_COORDINATES.y]);
};
