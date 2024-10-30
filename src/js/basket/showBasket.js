export const showBasket = () => {
  const basket = document.querySelector('.basket');
  const basketLink = document.querySelector('.basket-link');

  basketLink.addEventListener('click', event => {
    event.preventDefault();
    basket.classList.toggle('active-basket');
  });
};
