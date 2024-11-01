export const basketOperation = () => {
  const offersCards = document.querySelector('.offers__cards');
  const products = document.querySelector('.products');
  let basketSum = document.querySelector('.basket__sum');

  document.addEventListener('click', event => {
    if (event.target.closest('.card__button')) {
      const parent = event.target.closest('.card');
      const priceProduct = parseInt(parent.querySelector('.price-value').textContent);
      const cardImage = parent.querySelector('.card__image img').src;
      const cardCategory = parent.querySelector('.card__subtitle').textContent;
      const cardName = parent.querySelector('.card__title-link').textContent;

      products.innerHTML += `
                    <li class="product">
                      <div class="product__content">
                        <div class="product__image">
                          <img src="${cardImage}" alt="${cardName}" />
                        </div>
                        <div class="product__title">
                          <p class="product__name">${cardName}</p>
                          <p class="product__category">${cardCategory}</p>
                        </div>
                      </div>
                      <p class="product__price">$ ${priceProduct}</p>
                    </li>
      `;

      const fullSum = [...products.querySelectorAll('.product__price')].reduce(
        (acc, cur) => acc + +cur.textContent.match(/\d+/),
        0,
      );
      basketSum.innerHTML = `$ ${fullSum}`;
    }
  });
};
