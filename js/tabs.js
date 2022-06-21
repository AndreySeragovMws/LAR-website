const jobsItems = document.querySelectorAll('.jobs__vacancy-name');
const jobsContent = document.querySelectorAll('.jobs__content');
const jobsButtons = document.querySelectorAll('.jobs__button')
const jobsTitles = document.querySelectorAll('.jobs__item-title');
const jobsList = document.querySelector('.jobs__list');

jobsList.addEventListener('click', (evt) => {
  const target = evt.target;
  jobsItems.forEach((item, i) => {
    if (target == item) {
      slideToggle(jobsContent[i]);
      jobsButtons[i].classList.toggle('jobs__button--close');
      jobsButtons[i].classList.toggle('jobs__button--open');
    }
  });
  jobsButtons.forEach((item, i) => {
    if (target == item) {
      slideToggle(jobsContent[i]);
      jobsButtons[i].classList.toggle('jobs__button--close');
      jobsButtons[i].classList.toggle('jobs__button--open');
    }
  });
  jobsTitles.forEach((item, i) => {
    if (target == item) {
      slideToggle(jobsContent[i]);
      jobsButtons[i].classList.toggle('jobs__button--close');
      jobsButtons[i].classList.toggle('jobs__button--open');
    }
  });
});

let slideUp = (target, duration=500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout( () => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

let slideDown = (target, duration=500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none')
    display = 'block';

  target.style.display = 'grid';
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout( () => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}
 let slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
}