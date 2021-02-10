import {createListing} from './listing.js';
import {SIMILAR_LISTINGS_COUNT} from './data.js';

const similarListings = new Array(SIMILAR_LISTINGS_COUNT).fill(null).map(() => createListing());

similarListings;
