export const showMenuBruger = () => {
  const menu = document.querySelector('.header__menu');
  const menuBtn = document.querySelector('.basket-burger');

  const body = document.body;

  if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active-mob');
      menuBtn.classList.toggle('active');
      body.classList.toggle('lock');
    });
  }
};
