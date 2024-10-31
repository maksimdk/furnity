export const showForm = () => {
  const linkSearch = document.querySelector('.basket-search');
  const form = document.querySelector('.header__form');
  const menuList = document.querySelector('.header__menu');

  document.addEventListener('click', event => {
    if (event.target.closest('.basket-search')) {
      event.preventDefault();
      menuList.classList.toggle('active-menu');
      form.classList.toggle('active-form');
      linkSearch.classList.toggle('active-search');
      return;
    }
    if (!event.target.closest('.header__form')) {
      menuList.classList.add('active-menu');
      form.classList.remove('active-form');
      linkSearch.classList.add('active-search');
    }
  });

  document.addEventListener('keyup', event => {
    if (event.code === 'Escape') {
      menuList.classList.add('active-menu');
      form.classList.remove('active-form');
      linkSearch.classList.add('active-search');
    }
  });
};
