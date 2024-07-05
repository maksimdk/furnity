import { createCard } from "./createCard.js";
import { createArrowButton } from "./createArrowButton.js";

export const displayOffers = (product) => {
  const element = document.querySelector(".offers__wrapper");
  const newEl = document.createElement("ul");
  newEl.classList.add("cards", "offers__cards");
  element.append(newEl);

  product.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.classList.add("card");
    newEl.append(newLi);
    newLi.innerHTML = createCard(
      item.name,
      item.type,
      item.price,
      item.currency,
      item.imageUrl,
    );
  });

  for (let elem of element.children) {
    if (!elem.matches('[class$="offers__arrow--previous"]')) {
      element.append(createArrowButton("previous"));
    } else if (!elem.matches('[class$="offers__arrow--next"]')) {
      element.append(createArrowButton("next"));
      break;
      // =========??????????????????????????================
    }
  }
};
