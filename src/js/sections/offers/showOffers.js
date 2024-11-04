import { createArrowButton } from '../../components/arrow/createArrowButton.js';
import { createList } from '../../components/products/createList.js';
import { urlProduct } from '../../constants/constants.js';
import { getData } from '../../utils/getData.js';

export const showOffers = product => {
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

(async () => {
  const data = await getData(urlProduct);
  showOffers(data);
})();
