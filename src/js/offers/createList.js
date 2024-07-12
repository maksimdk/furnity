import { createCard } from "./createCard.js";

export const createList = (arr, section) => {
  const ulElem = document.createElement("ul");
  ulElem.classList.add("cards", `${section}__cards`);

  arr.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.classList.add("card");
    ulElem.append(newLi);
    newLi.innerHTML = createCard(
      item.name,
      item.type,
      item.price,
      item.currency,
      item.imageUrl,
    );
  });

  const countElem = document.querySelector(".basket-actions__count");
  let count = 1;

  ulElem.addEventListener("click", (event) => {
    if (event.target.closest(".card__button")) {
      countElem.style.display = "flex";
      countElem.textContent = `${count++}`;
    }
  });

  return ulElem;
};
