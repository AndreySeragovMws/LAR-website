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
// const jobsItems = document.querySelectorAll('.jobs__vacancy-name');
// const jobsContent = document.querySelectorAll('.jobs__content');
// const jobsButtons = document.querySelectorAll('.jobs__button')
// const jobsTitles = document.querySelectorAll('.jobs__item-title');
// const jobsList = document.querySelector('.jobs__list');
const video = document.querySelector('.about-us__video');
const videoText = document.querySelector('.about-us__title');
const videoClose = document.querySelector('.video__close-button');
const videoPlay = document.querySelector('.video__play-button');

//header menu
openMenuButton.addEventListener('click', () => {
  nav.classList.remove('fadeout');
  nav.classList.remove('hide');
  headerMenu.classList.add('hide');
  // document.body.style.position = 'fixed';
});

closeMenuButton.addEventListener('click', () => {
  nav.classList.add('fadeout');
  setTimeout(() => {
    nav.classList.add('hide')
  }, 450);
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
// jobsList.addEventListener('click', (evt) => {
//   const target = evt.target;
//   jobsItems.forEach((item, i) => {
//     if (target == item) {
//       jobsContent[i].classList.toggle('hide');
//       jobsButtons[i].classList.toggle('jobs__button--close');
//       jobsButtons[i].classList.toggle('jobs__button--open');
//     }
//   });
//   jobsButtons.forEach((item, i) => {
//     if (target == item) {
//       jobsContent[i].classList.toggle('hide');
//       jobsButtons[i].classList.toggle('jobs__button--close');
//       jobsButtons[i].classList.toggle('jobs__button--open');
//     }
//   });
//   jobsTitles.forEach((item, i) => {
//     if (target == item) {
//       jobsContent[i].classList.toggle('hide');
//       jobsButtons[i].classList.toggle('jobs__button--close');
//       jobsButtons[i].classList.toggle('jobs__button--open');
//     }
//   });
// });

//video
video.addEventListener('click', () => {
  videoPlay.classList.add('hide');
  videoClose.classList.remove('hide');
  video.setAttribute('controls' , 'controls');
  // if (document.documentElement.clientWidth >= 1060) {
  //   videoText.classList.add('hide');
  // }
  
});

videoPlay.addEventListener('click', () => {
  videoPlay.classList.add('hide');
  videoClose.classList.remove('hide');
  video.setAttribute('controls' , 'controls');
  video.play();
  // if (document.documentElement.clientWidth >= 1060) {
  //   videoText.classList.add('hide');
  // }
});

videoClose.addEventListener('click', () => {
  videoText.classList.remove('hide');
  videoPlay.classList.remove('hide');
  videoClose.classList.add('hide');
  video.removeAttribute('controls' , 'controls');
  video.pause();
});





