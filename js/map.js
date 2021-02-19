import {
  mapFilters,
  form,
  enableElements
} from './disable.js';

mapFilters.classList.remove('map__filters--disabled');
form.classList.remove('ad-form--disabled');
enableElements(mapFilters, 'select');
enableElements(mapFilters, 'fieldset');
enableElements(form, 'fieldset');

// eslint-disable-next-line no-undef
const map = L.map('map-canvas')
  .on('load', () => {

  })
  .setView({
    lat: 35.660928,
    lng: 139.780126,
  }, 12);

// eslint-disable-next-line no-undef
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// eslint-disable-next-line no-undef
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// eslint-disable-next-line no-undef
const mainMarker = L.marker(
  {
    lat: 35.660928,
    lng: 139.780126,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);
