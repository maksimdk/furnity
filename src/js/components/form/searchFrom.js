export const searchForm = () => {
  const form = document.forms.main;
  const formInput = document.querySelector('.main-form__input');

  const formInputPlaceholder = formInput.placeholder;
  formInput.addEventListener('focus', event => {
    formInput.placeholder = '';
    form.style.border = '2px solid var(--accent-yellow-color)';
  });
  formInput.addEventListener('blur', event => {
    formInput.placeholder = formInputPlaceholder;
    form.style.border = '2px solid var(--text-main-color)';
  });

  formInput.addEventListener('input', event => {
    console.log(formInput.value);
  });
};
