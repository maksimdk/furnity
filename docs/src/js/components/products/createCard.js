export const createCard = (name, type, price, currency, imageUrl) => {
  return `    <li class="card">
                  <div class="card__image">
                    <img
                      src="${imageUrl}"
                      alt="${name}"
                    />
                  </div>
                  <div class="card__content">
                    <div class="card__category">
                      <p class="card__subtitle">${type}</p>
                      <a href="#" class="card__title-link">
                        ${name}
                      </a>
                    </div>
                    <div class="card__action">
                      <p class="card__price">
                        <span class="currency">${currency}</span>
                        <span class="price-value">${price}</span>
                      </p>
                      <button class="button card__button">
                        <svg>
                          <use href="src/images/favicons/sprite.svg#plus" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>`;
};
