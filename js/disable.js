import {disable, enable} from './util.js';
import {form} from './form.js';

const mapFilters = document.querySelector('.map__filters');

export const disableElements = function () {
  mapFilters.classList.add('map__filters--disabled');
  form.classList.add('ad-form--disabled');
  disable(form);
  disable(mapFilters);
};

export const enableElements = function () {
  mapFilters.classList.remove('map__filters--disabled');
  form.classList.remove('ad-form--disabled');
  enable(form);
  enable(mapFilters);
};
