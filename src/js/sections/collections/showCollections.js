import { createList } from '../../components/products/createList.js';
import { urlProduct } from '../../constants/constants.js';
import { getData } from '../../utils/getData.js';
import { collectionData } from './data/collectionData.js';
import { collectionsMenuData } from './data/collectionsMenuData.js';

//======Logic SPA===========
// import router from './router/router.js';
// import SPA from './router/SPA.js';

export const showCollections = product => {
  const element = document.querySelector('.collections__wrapper');

  const menuUl = document.createElement('ul');
  menuUl.classList.add('collections__menu');
  menuUl.setAttribute('id', 'menu');
  collectionsMenuData.forEach(item => {
    menuUl.innerHTML += `
                  <li class="collections__menu-item">
                    <button class="btn collections__menu-button">${item}</button>
                  </li>
      `;

    //======Logic SPA===========
    // menuUl.innerHTML += `
    //             <a href="/${item.toLocaleLowerCase()}" class="collections__link">
    //               <li class="collections__menu-item">
    //                 <button class="btn collections__menu-button">${item}</button>
    //               </li>
    //             </a>
    //           `;
  });

  element.append(menuUl);
  element.append(createList(product, 'collections'));

  //======Logic SPA===========
  // const newDiv = document.createElement('div');
  // newDiv.setAttribute('id', 'root');
  // element.append(newDiv);
  // const app = new SPA(document.getElementById('root'), document.getElementById('menu'), router);
  // app.init();
};

(async () => {
  const data = await getData(urlProduct);
  showCollections(data);
})();
