import { createReviews } from './createReviews.js';
import { reviewsData } from './data/reviewsData.js';

export const showReviews = reviews => {
  const contentElem = document.querySelector('.reviews__content');
  contentElem.append(createReviews(reviews));

  const btnElem = document.createElement('div');
  btnElem.classList.add('reviews__scrolling');
  btnElem.innerHTML = `
        <button
                    class="button arrow-button reviews__arrow reviews__arrow--previous"
                    type="button"
                    aria-label="Previous review"
                  >
                    <svg class="arrow arrow--previous">
                      <use href="src/images/favicons/sprite.svg#next" />
                    </svg>
                  </button>
                  <button
                    class="button arrow-button reviews__arrow reviews__arrow--next"
                    type="button"
                    aria-label="Next review"
                  >
                    <svg class="arrow">
                      <use href="src/images/favicons/sprite.svg#next" />
                    </svg>
                  </button>
  `;
  contentElem.append(btnElem);

  const reviewsArray = document.querySelectorAll('.review');
  let reviewIndex = 0;

  function show(index) {
    reviewsArray[reviewIndex].style.display = 'none';
    reviewsArray[index].style.display = 'block';
    reviewIndex = index;
  }

  btnElem.addEventListener('click', event => {
    if (event.target.closest('.reviews__arrow--previous')) {
      let index = reviewIndex - 1;

      if (index < 0) {
        index = reviewsArray.length - 1;
      }
      show(index);
    }
    if (event.target.closest('.reviews__arrow--next')) {
      let index = reviewIndex + 1;
      if (index >= reviewsArray.length) {
        index = 0;
      }
      show(index);
    }
  });
  show(reviewIndex);
};

showReviews(reviewsData);
