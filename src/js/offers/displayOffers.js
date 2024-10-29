import { createArrowButton } from "./createArrowButton.js";
import { createList } from "./createList.js";

fetch("https://6696e3d50312447373c404b2.mockapi.io/offers/product")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then((json) => displayOffers(json))
  .catch((err) => console.log(err.message));

export const displayOffers = (product) => {
  const element = document.querySelector(".offers__wrapper");
  element.append(createList(product, "offers"));

  for (let elem of element.children) {
    if (!elem.matches('[class$="offers__arrow--previous"]')) {
      element.append(createArrowButton("previous"));
    } else if (!elem.matches('[class$="offers__arrow--next"]')) {
      element.append(createArrowButton("next"));
      // =========??????????????????????????================
      break;
      // =========??????????????????????????================
    }
  }
};
