import { collectionsMenuData } from '../collections/data/collectionsMenuData.js';

import { wrapperButton } from '../../wrapper/wrapperButton.js';

import { displayMenu } from './displayMenu.js';

import { basket } from '../../components/basket/basketCount.js';
import { basketOperation } from '../../components/basket/basketOperation.js';
import { showBasket } from '../../components/basket/showBasket.js';
import { searchForm } from '../../components/form/searchFrom.js';
import { showForm } from '../../components/form/showForm.js';

export const showHeader = async () => {
  wrapperButton();
  showForm();
  showBasket();
  basket();
  searchForm();
  basketOperation();
  try {
    displayMenu(collectionsMenuData);
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err);
  }
};

showHeader();
