import {priceRange} from './data.js'

export const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
export const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');

const priceFilter = function (popup) {
  switch(housingPrice.value) {
    case 'low':
      return popup.offer.price <= priceRange.low;
    case 'middle':
      return popup.offer.price > priceRange.low && popup.offer.price <= priceRange.middle;
    case 'high':
      return popup.offer.price > priceRange.middle;
    case 'any':
      return popup;
  }
};

const featuresFilter = function (popup) {
  const featuresChecked = housingFeatures.querySelectorAll('input:checked');
  return Array.from(featuresChecked).every(function (item) {
    return popup.offer.features.includes(item.value);
  });
};

export const filterHousing = function (data) {
  return data.filter(function (popup) {
    return (popup.offer.type === housingType.value || housingType.value === 'any')
    && (popup.offer.rooms === +housingRooms.value || housingRooms.value === 'any')
    && (popup.offer.guests === +housingGuests.value || housingGuests.value === 'any')
    && priceFilter(popup)
    && featuresFilter(popup)
  })
};
