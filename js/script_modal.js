const open = document.querySelectorAll('#investor');
const modal = document.querySelector('#openModal');
const modalCloseBakdrop = document.querySelector('.modal').addEventListener('click', onCloseBackdrop);
const modalOpen = document.querySelector('.calc__submit-btn').addEventListener('click', onClick);
const close = document.querySelector('.close').addEventListener('click', onClose);
open.forEach(el => {
  el.addEventListener('click', onClick);
});

function onCloseBackdrop(e) {
  if (e.target == e.currentTarget) {
    modal.classList.remove('modal--active');
    // document.body.style.overflow = 'visible';
  }
}

function onClick(e) {
  e.preventDefault();
  document.body.style.overflow = 'hidden';
  modal.classList.add('modal--active');
}
function onClose() {
  document.body.style.overflow = 'visible';
  modal.classList.remove('modal--active');
}
