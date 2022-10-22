(function () {
  const headerEl = document.querySelector('.header__wrapper');
  window.onscroll = () => {
    if (window.pageYOffset > 80) {
      headerEl.classList.add('header-active');
    } else {
      headerEl.classList.remove('header-active');
    }
  };
})();
