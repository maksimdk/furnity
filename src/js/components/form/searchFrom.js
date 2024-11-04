import { urlProduct } from '../../constants/constants.js';
import { showFurnity } from '../../sections/header/showFurnity.js';
import { getData } from '../../utils/getData.js';
import { searchURL } from './searchURL.js';

export const searchForm = () => {
  const form = document.forms.main;
  const formInput = document.querySelector('.main-form__input');
  const formButton = document.querySelector('.main-form__button');
  const resultBlock = document.querySelector('.header__result');
  const resultProducts = document.querySelector('.result__products');

  const formInputPlaceholder = formInput.placeholder;
  formInput.addEventListener('focus', event => {
    formInput.placeholder = '';
    form.style.border = '2px solid var(--accent-yellow-color)';
  });
  formInput.addEventListener('blur', event => {
    formInput.placeholder = formInputPlaceholder;
    form.style.border = '2px solid var(--text-main-color)';
  });

  if (resultProducts.children.length === 0) {
    resultBlock.style.display = 'none';
  }

  form.addEventListener('input', event => {
    (async () => {
      const json = await getData(searchURL(urlProduct));
      showFurnity(json);
    })();
    if (formInput.value.length === 0) {
      resultBlock.style.display = 'none';
    }
    resultBlock.style.display = 'block';

    resultProducts.innerHTML = '';

    // fetch(searchURL(urlProduct))
    //   .then(response => {
    //     if (response.status === 404) {
    //       alert('Введите корректные данные!');
    //       return;
    //     }
    //     if (!response.ok) {
    //       throw new Error(`${response.status} - ${response.statusText}`);
    //     }
    //     return response.json();
    //   })
    //   .then(json => {
    //     if (json.length === 0) {
    //       alert('Введите корректные данные!');
    //       return;
    //     }

    //     resultBlock.style.display = 'block';
    //     searchFurnity(json);
    //   })
    //   .catch(err => console.log(err.message));
    // event.preventDefault();
  });
};
