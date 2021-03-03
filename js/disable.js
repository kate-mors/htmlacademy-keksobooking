const mapFilters = document.querySelector('.map__filters');
const form = document.querySelector('.ad-form');

export const disableElements = function () {
  mapFilters.classList.add('map__filters--disabled');
  mapFilters.querySelectorAll('select').forEach(function (select) {
    select.disabled = true;
  });
  mapFilters.querySelectorAll('fieldset').forEach(function (fieldset) {
    fieldset.disabled = true;
  });

  form.classList.add('ad-form--disabled');
  form.querySelectorAll('fieldset').forEach(function (fieldset) {
    fieldset.disabled = true;
  });
};

export const enableElements = function () {
  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.querySelectorAll('select').forEach(function (select) {
    select.disabled = false;
  });
  mapFilters.querySelectorAll('fieldset').forEach(function (fieldset) {
    fieldset.disabled = false;
  });

  form.classList.remove('ad-form--disabled');
  form.querySelectorAll('fieldset').forEach(function (fieldset) {
    fieldset.disabled = false;
  });
};
