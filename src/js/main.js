import { menuData } from "./header/data/menuData.js";
import { productData } from "./offers/data/productData.js";

import { displayOffers } from "./offers/displayOffers.js";
import { displayMenu } from "./header/data/displayMenu.js";

displayMenu(menuData);
displayOffers(productData);
