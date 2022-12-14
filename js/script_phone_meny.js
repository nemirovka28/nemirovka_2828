const button = document.querySelector('.menu-button').addEventListener('click', onClick);
const iconClose = document.querySelector('.icon-close');
const iconMenu = document.querySelector('.icon-menu');
const clickOnLi = document.querySelectorAll('.telephone__list-item');
iconClose.style.display = 'none';
iconMenu.style.display = 'block';
const containerPhoneMenu = document.querySelector('.telephone__menu');
function onClick() {
  if (containerPhoneMenu.classList.contains('telephone__menu--active')) {
    containerPhoneMenu.classList.remove('telephone__menu--active');
    iconClose.style.display = 'none';
    iconMenu.style.display = 'block';
    document.body.style.overflow = 'visible';
  } else {
    iconClose.style.display = 'block';
    iconMenu.style.display = 'none';
    document.body.style.overflow = 'hidden';
    containerPhoneMenu.classList.add('telephone__menu--active');
  }
}

clickOnLi.forEach(el => {
  el.addEventListener('click', () => {
    containerPhoneMenu.classList.remove('telephone__menu--active');
    document.body.style.overflow = 'visible';
    iconClose.style.display = 'none';
    iconMenu.style.display = 'block';
  });
});
