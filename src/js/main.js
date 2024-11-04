import { urlProduct } from './constants/constants.js';

import { menuData } from './sections/header/data/menuData.js';
// import { productData } from './offers/data/productData.js';
import { collectionData } from './sections/collections/data/collectionData.js';
import { reviewsData } from './sections/reviews/data/reviewsData.js';

import { displayOffers } from './sections/offers/displayOffers.js';
import { displayMenu } from './sections/header/displayMenu.js';
import { displayCollections } from './sections/collections/displayCollections.js';
import { displayReviews } from './sections/reviews/displayReviews.js';
import { wrapperButton } from './wrapper/wrapperButton.js';
import { basket } from './components/basket/basketCount.js';
import { showForm } from './components/form/showForm.js';
import { showBasket } from './components/basket/showBasket.js';
import { basketOperation } from './components/basket/basketOperation.js';
import { searchForm } from './components/form/searchFrom.js';

//==========WRAPPER==========
wrapperButton();
showForm();
showBasket();
basket();
searchForm();
//==========WRAPPER==========

//==========HEADER==========
try {
  displayMenu(menuData);
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err);
}
//==========HEADER==========

//==========MAIN==========
//OFFERS
fetch(urlProduct)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then(json => displayOffers(json))
  .catch(err => console.log(err.message));
//OFFERS
displayCollections(collectionData);
displayReviews(reviewsData);
//==========MAIN==========

//==========FOOTER==========

//==========FOOTER==========

//===========ADED ASYNC AWAIT=================
setTimeout(() => {
  basketOperation();
}, 2000);
