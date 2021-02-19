const mapFilters = document.querySelector('.map__filters');
const form = document.querySelector('.ad-form');

const disableElements = (parent, child) => {
  parent.querySelectorAll(child).forEach(function (element) {
    element.disabled = true;
  });
};

const enableElements = (parent, child) => {
  parent.querySelectorAll(child).forEach(function (element) {
    element.disabled = false;
  });
};

mapFilters.classList.add('map__filters--disabled');
form.classList.add('ad-form--disabled');
disableElements(mapFilters, 'select');
disableElements(mapFilters, 'fieldset');
disableElements(form, 'fieldset');

export {
  mapFilters,
  form,
  enableElements
}
