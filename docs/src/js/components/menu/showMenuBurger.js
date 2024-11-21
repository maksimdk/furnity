export const showMenuBruger = () => {
  const menu = document.querySelector('.header__menu');
  const menuBtn = document.querySelector('.basket-burger');

  const body = document.body;

  if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active-mob');
      menuBtn.classList.toggle('active-button');
      body.classList.toggle('lock');
    });

    menu.querySelectorAll('.menu__link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active-mob');
        menuBtn.classList.remove('active-button');
        body.classList.remove('lock');
      });
    });
  }
};
