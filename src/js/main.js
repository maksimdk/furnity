import { urlProduct } from './constants/constants.js';
import { getData } from './utils/getData.js';

import { collectionData } from './sections/collections/data/collectionData.js';
import { reviewsData } from './sections/reviews/data/reviewsData.js';

import { displayOffers } from './sections/offers/displayOffers.js';
import { displayCollections } from './sections/collections/displayCollections.js';
import { displayReviews } from './sections/reviews/displayReviews.js';
import { showHeader } from './sections/header/showHeader.js';

//==========Wrapper & Header==========

showHeader();
//==========Wrapper & Header==========

//==========MAIN==========
//OFFERS

(async () => {
  const data = await getData(urlProduct);
  displayOffers(data);
})();

// fetch(urlProduct)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`${response.status} - ${response.statusText}`);
//     }
//     return response.json();
//   })
//   .then(json => displayOffers(json))
//   .catch(err => console.log(err.message));
//OFFERS
displayCollections(collectionData);
displayReviews(reviewsData);
//==========MAIN==========

//==========FOOTER==========

//==========FOOTER==========

//===========ADED ASYNC AWAIT=================
