export const showBasket = () => {
  const basket = document.querySelector('.basket');
  const form = document.querySelector('.form');

  document.addEventListener('click', event => {
    if (event.target.closest('.basket-link')) {
      event.preventDefault();
      basket.classList.toggle('active-basket');
      return;
    }
    if (!event.target.closest('.basket__wrapper')) {
      basket.classList.remove('active-basket');
    }

    //=========FIX BUG==============
    const basketContent = document.querySelector('.basket__content');
    // if (basketContent.clientHeight > 289) {
    //   // basketContent.style.maxHeight = `260px`;
    //   // basketContent.style.overflow = 'hidden';
    //   basketContent.style.overflowY = 'scroll';
    // }
    //=========FIX BUG==============
  });

  document.addEventListener('keyup', event => {
    if (event.code === 'Escape') {
      basket.classList.remove('active-basket');
    }
  });
};
