export const showFurnity = data => {
  const resultProducts = document.querySelector('.result__products');

  data.forEach(item => {
    resultProducts.innerHTML += `
							<li class="result__product">
								<div class="product__content">
									<div class="product__image">
										<img
											src="${item.imageUrl}"
											alt="${item.name}" />
									</div>
									<div class="product__title">
										<p class="product__name">${item.name}</p>
										<p class="product__category">${item.type}</p>
									</div>
								</div>
								<p class="product__price">${item.currency} ${item.price}</p>
							</li>
		`;
  });
};
