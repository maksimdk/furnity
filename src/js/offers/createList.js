import { createCard } from "./createCard.js";

export const createList = (arr, section) => {
  const newUl = document.createElement("ul");
  newUl.classList.add("cards", `${section}__cards`);

  arr.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.classList.add("card");
    newUl.append(newLi);
    newLi.innerHTML = createCard(
      item.name,
      item.type,
      item.price,
      item.currency,
      item.imageUrl,
    );
  });

  return newUl;
};
