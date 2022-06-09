const openMenuButton = document.querySelector('.header__menu');
const nav = document.querySelector('.nav');
const closeMenuButton = document.querySelector('.nav__menu');
const navLink = document.querySelectorAll('.nav__link');
const navList = document.querySelector('.nav__list');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__wrapper');
const headerLogo = document.querySelectorAll('.header__logo-icon path');
const headerSpan = document.querySelector('.header__span');
const headerBurger = document.querySelectorAll('.header__menu-icon rect');
const headerButton = document.querySelector('.header__button');
const jobsItems = document.querySelectorAll('.jobs__vacancy-name');
const jobsContent = document.querySelectorAll('.jobs__content');
const jobsButtons = document.querySelectorAll('.jobs__button')
const jobsList = document.querySelector('.jobs__list');

//header menu
openMenuButton.addEventListener('click', () => {
  nav.classList.remove('hide');
  headerMenu.classList.add('hide');
  // document.body.style.position = 'fixed';
});

closeMenuButton.addEventListener('click', () => {
  nav.classList.add('hide');
  headerMenu.classList.remove('hide');
  // document.body.style.position = '';
});

navList.addEventListener('click', (evt) => {
  const target = evt.target;
  navLink.forEach((item, i) => {
    if (target == item) {
      nav.classList.add('hide');
      headerMenu.classList.remove('hide');
    }
  });
});

//header sticky
document.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('sticky__header');
    headerMenu.classList.add('sticky__wrapper');
    headerLogo.forEach((item) => {
      item.style.fill = '#c51f43';
    });
    headerSpan.style.color = '#1B202B';
    headerBurger.forEach((item) => {
      item.style.fill = '#1B202B';
    });
    headerButton.classList.remove('hide')
  } else {
    header.classList.remove('sticky__header');
    headerMenu.classList.remove('sticky__wrapper');
    headerLogo.forEach((item) => {
      item.style.fill = '#ffffff';
    });
    headerSpan.style.color = '#ffffff';
    headerBurger.forEach((item) => {
      item.style.fill = '#ffffff';
    });
    headerButton.classList.add('hide')
  }
})

// tabs
jobsList.addEventListener('click', (evt) => {
  const target = evt.target;
  jobsItems.forEach((item, i) => {
    if (target == item || target.classList.contains('jobs__button') || target.classList.contains('jobs__item-title')) {
      jobsContent[i].classList.toggle('hide');
      jobsButtons[i].classList.toggle('jobs__button--close');
      jobsButtons[i].classList.toggle('jobs__button--open');
    }
  });
});






