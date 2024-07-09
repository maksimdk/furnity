export const displayMenu = (dataMenu) => {
  const menu = document.querySelector(".header__menu");
  const ul = document.createElement("ul");
  ul.classList.add("menu__list");

  //+++++++++++++++++++++++++++++++++++++++++++++++
  // menu.append(ul);
  //+++++++++++++++++++++++++++++++++++++++++++++++


  dataMenu.forEach((item) => {
    ul.innerHTML += `
                <li class="menu__item">
                  <a href="#" class="menu__link">${item}</a>
                </li>
      `;
  });
};
