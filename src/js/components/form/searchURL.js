export const searchURL = url => {
  const formInput = document.querySelector('.main-form__input');
  url.searchParams.set('search', `${formInput.value}`);

  return url;
};
