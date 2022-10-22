const refs = {
  select: document.querySelectorAll('.askandansw__item'),
};

refs.select.forEach(el => {
  el.addEventListener('click', onClick);
  function onClick(e) {
    const isChangeValue = e.currentTarget.querySelector('.askandansw__item-content');
    if (!isChangeValue) return;
    if (isChangeValue.classList.contains('askandansw__item-content--active')) {
      isChangeValue.classList.remove('askandansw__item-content--active');
    } else {
      isChangeValue.classList.add('askandansw__item-content--active');
    }
    const rotate = e.currentTarget.querySelector('.rotate');
    if (rotate.classList.contains('rotate--active')) {
      rotate.classList.remove('rotate--active');
    } else {
      rotate.classList.add('rotate--active');
    }
  }
});
