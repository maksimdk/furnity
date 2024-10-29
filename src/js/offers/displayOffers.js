import { createArrowButton } from '../components/createArrowButton.js';
import { createList } from '../components/createList.js';

export const displayOffers = product => {
  const element = document.querySelector('.offers__wrapper');
  element.append(createList(product, 'offers'));

  for (let elem of element.children) {
    if (!elem.matches('[class$="offers__arrow--previous"]')) {
      element.append(createArrowButton('previous'));
    } else if (!elem.matches('[class$="offers__arrow--next"]')) {
      element.append(createArrowButton('next'));
      // =========??????????????????????????================
      break;
      // =========??????????????????????????================
    }
  }

  // element.append(createArrowButton('previous'));
  // element.append(createArrowButton('next'));
};
