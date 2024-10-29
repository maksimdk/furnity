import { createList } from "../offers/createList.js";
import { collectionsMenuData } from "./data/collectionsMenuData.js";

export const displayCollections = (product) => {
  const element = document.querySelector(".collections__wrapper");

  const ul = document.createElement("ul");
  ul.classList.add("collections__menu");
  collectionsMenuData.forEach((item) => {
    ul.innerHTML += `
                <li class="collections__menu-item">
                  <button class="btn collections__menu-button">${item}</button>
                </li>
      `;
  });

  element.append(ul);
  element.append(createList(product, "collections"));
};
