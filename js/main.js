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
const video = document.querySelector('.about-us__video');
const videoBox = document.querySelector('.about-us__videobox');
const videoClose = document.querySelector('.video__close-button');
const videoPlay = document.querySelector('.video__play-button');

//header menu
openMenuButton.addEventListener('click', () => {
  nav.classList.remove('fadeout');
  nav.classList.remove('hide');
  headerMenu.classList.add('hide');
});

closeMenuButton.addEventListener('click', () => {
  nav.classList.add('fadeout');
  setTimeout(() => {
    nav.classList.add('hide')
  }, 450);
  headerMenu.classList.remove('hide');
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

//video

function getRect() {
  const domRect = video.getBoundingClientRect();

  if (domRect.bottom <= document.documentElement.clientHeight && domRect.top > 104) {
    video.play();
  } else {
    video.pause();
    video.removeAttribute('controls' , 'controls');
  }
}

window.addEventListener('scroll', () => {
  getRect();
})

video.addEventListener('click', () => {
  video.setAttribute('controls' , 'controls');
})











