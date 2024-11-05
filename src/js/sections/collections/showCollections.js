import { createList } from '../../components/products/createList.js';
import { urlProduct } from '../../constants/constants.js';
import { getData } from '../../utils/getData.js';
import { collectionData } from './data/collectionData.js';
import { collectionsMenuData } from './data/collectionsMenuData.js';

export const showCollections = product => {
  const element = document.querySelector('.collections__wrapper');

  const menuUl = document.createElement('ul');
  menuUl.classList.add('collections__menu');
  collectionsMenuData.forEach(item => {
    menuUl.innerHTML += `
                <li class="collections__menu-item">
                  <button class="btn collections__menu-button">${item}</button>
                </li>
      `;
  });

  element.append(menuUl);
  element.append(createList(product, 'collections'));
};

(async () => {
  const data = await getData(urlProduct);
  showCollections(data);
})();
