const openMenuButton = document.querySelector('.header__menu');
const nav = document.querySelector('.nav');
const closeMenuButton = document.querySelector('.nav__menu');
const header = document.querySelector('.header');



openMenuButton.addEventListener('click', () => {
  nav.classList.remove('hide');
  header.classList.add('hide');
});

closeMenuButton.addEventListener('click', () => {
  nav.classList.add('hide');
  header.classList.remove('hide');
});

