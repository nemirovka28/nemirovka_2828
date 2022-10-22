const mapList = document.querySelectorAll('.map__item-list');

mapList.forEach(el => {
  setInterval(() => {
    el.style.transition = 'all 0.2s';
    el.style.opacity = 0;
    el.style.top = `${getRandomArbitrary(35, 65)}%`;
    el.style.left = `${getRandomArbitrary(35, 65)}%`;
  }, 3000);
  setInterval(() => {
    el.style.opacity = 1;
  }, 3200);
});
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
