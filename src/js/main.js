import { menuData } from './header/data/menuData.js';
import { productData } from './offers/data/productData.js';
import { collectionData } from './collections/data/collectionData.js';
import { reviewsData } from './reviews/data/reviewsData.js';

import { displayOffers } from './offers/displayOffers.js';
import { displayMenu } from './header/displayMenu.js';
import { displayCollections } from './collections/displayCollections.js';
import { displayReviews } from './reviews/displayReviews.js';
import { wrapperButton } from './wrapper/wrapperButton.js';
import { basket } from './basket/basketCount.js';
import { showForm } from './form/showForm.js';

//==========WRAPPER==========
wrapperButton();
showForm();
basket();
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
fetch('https://6696e3d50312447373c404b2.mockapi.io/offers/product')
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
