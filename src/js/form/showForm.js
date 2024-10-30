export const showForm = () => {
  const linkSearch = document.querySelector('.basket-search');
  const form = document.querySelector('.header__form');
  const menuList = document.querySelector('.header__menu');

  //=============== Доделать!!!!!!!!!!=======================
  document.addEventListener('click', event => {
    if (event.target.closest('.basket-search')) {
      event.preventDefault();
      menuList.classList.toggle('active');
      form.classList.toggle('active');
      linkSearch.classList.toggle('active');
    }
    if (!event.target.closest('body') && form.classList.contains('active')) {
      console.log('hew');
      menuList.classList.add('active');
      form.classList.remove('active');
      linkSearch.classList.add('active');
    }
  });

  document.addEventListener('keyup', event => {
    if (event.code === 'Escape') {
      menuList.classList.add('active');
      form.classList.remove('active');
      linkSearch.classList.add('active');
    }
  });
};
