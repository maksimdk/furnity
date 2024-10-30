export const showBasket = () => {
  const basket = document.querySelector('.basket');

  document.addEventListener('click', event => {
    if (event.target.closest('.basket-link')) {
      event.preventDefault();
      basket.classList.toggle('active-basket');
      return;
    }
    if (!event.target.closest('.basket__wrapper')) {
      basket.classList.remove('active-basket');
    }
  });

  document.addEventListener('keyup', event => {
    if (event.code === 'Escape') {
      basket.classList.remove('active-basket');
    }
  });
};
