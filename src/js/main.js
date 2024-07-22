import { menuData } from "./header/data/menuData.js";
import { productData } from "./offers/data/productData.js";
import { collectionData } from "./collections/data/collectionData.js";
import { reviewsData } from "./reviews/data/reviewsData.js";

import { displayOffers } from "./offers/displayOffers.js";
import { displayMenu } from "./header/displayMenu.js";
import { displayCollections } from "./collections/displayCollections.js";
import { displayReviews } from "./reviews/displayReviews.js";
import { wrapperButton } from "./wrapper/wrapperButton.js";

wrapperButton();

//HEADER
try {
  displayMenu(menuData);
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err);
}
//HEADER

displayCollections(collectionData);
displayReviews(reviewsData);
