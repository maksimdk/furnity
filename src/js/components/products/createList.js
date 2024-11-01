import { createCard } from './createCard.js';

export const createList = (arr, section) => {
  const ulElem = document.createElement('ul');
  ulElem.classList.add('cards', `${section}__cards`);

  arr.forEach(item => {
    ulElem.innerHTML += createCard(item.name, item.type, item.price, item.currency, item.imageUrl);
  });

  return ulElem;
};
