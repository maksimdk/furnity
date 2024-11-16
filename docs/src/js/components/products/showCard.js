export const showCard = () => {
  const card = document.querySelector('.card');

  document.addEventListener('mouseover', event => {
    if (event.target.closest('.card')) {
      event.target.closest('.card').classList.add('active__card');
    }
  });
  document.addEventListener('mouseout', event => {
    if (event.target.closest('.card')) {
      event.target.closest('.card').classList.remove('active__card');
    }
  });
};
