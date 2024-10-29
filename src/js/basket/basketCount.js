export const basket = () => {
  const countElem = document.querySelector('.basket-actions__count');
  let count = 1;

  document.addEventListener('click', event => {
    if (event.target.closest('.card__button')) {
      countElem.style.display = 'flex';
      countElem.textContent = `${count++}`;
    }
  });
};
