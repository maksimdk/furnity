import { createList } from "../offers/createList.js";

export const displayCollections = (product) => {
  const element = document.querySelector(".collections__wrapper");
  element.append(createList(product, "collections"));
};
