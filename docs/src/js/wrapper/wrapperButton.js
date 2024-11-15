export const wrapperButton = () => {
  const wrapperElem = document.querySelector('.wrapper');

  const buttonElem = document.createElement('button');
  buttonElem.classList.add('button', 'arrow-button', 'wrapper__button');
  buttonElem.innerHTML = `
        <svg class="arrow">
          <use href="./images/favicons/sprite.svg#arrow"></use>
        </svg>
  `;
  wrapperElem.append(buttonElem);

  let previousPosition = 0;

  buttonElem.addEventListener('click', () => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 1, behavior: 'smooth' });
      buttonElem.style.transform = 'rotate(90deg)';
      previousPosition = window.scrollY;
    } else {
      buttonElem.style.transform = 'rotate(270deg)';
      window.scrollTo({ top: previousPosition, behavior: 'smooth' });
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      buttonElem.style.display = 'block';
    }
    if (window.scrollY === 0) {
      buttonElem.style.display = 'none';
    }
  });
};
