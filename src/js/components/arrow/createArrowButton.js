export const createArrowButton = direction => {
  const arrowBtn = document.createElement('button');

  arrowBtn.classList.add('button', 'arrow-button', 'offers__arrow', `offers__arrow--${direction}`);
  arrowBtn.setAttribute('type', 'button');
  arrowBtn.setAttribute('aria-label', `${direction} product`);
  arrowBtn.innerHTML = `
                  <svg class="arrow arrow--${direction}">
                    <use href="./images/favicons/sprite.svg#arrow" />
                  </svg>
  `;

  return arrowBtn;

  // return `
  //               <button
  //               class="button arrow-button offers__arrow offers__arrow--${direction}"
  //               type="button"
  //               aria-label="${direction} product"
  //             >
  //               <svg class="arrow arrow--${direction}">
  //                 <use href="images/favicons/sprite.svg#arrow" />
  //               </svg>
  //             </button>
  // `;
};
