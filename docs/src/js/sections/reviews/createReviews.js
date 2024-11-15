export const createReviews = arr => {
  const ulElem = document.createElement('ul');
  ulElem.classList.add('reviews__list');

  arr.forEach(item => {
    const newLi = document.createElement('li');
    newLi.classList.add('review');
    ulElem.append(newLi);
    newLi.innerHTML = `
                    <div class="review__user">
                      <img
                              class="review__user-image"
                              src="${item.imageUrl || 'src/images/favicons/reviewsIcons/pngwing.com.png'}"
                              alt="${item.name}"
                      />
                      <div class="review__user-info">
                        <h4 class="review__user-name">${item.name}</h4>
                        <p class="review__user-position">${item.profession}</p>
                      </div>
                    </div>
                    <div class="review__content">
                      <p class="review__text">
                        ${item.review}
                      </p>
                    </div>
      `;
  });

  return ulElem;
};
