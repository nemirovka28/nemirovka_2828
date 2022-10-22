const progress = document.querySelector('.progress');

progress.addEventListener('input', function () {
  const value = this.value * 0.0001;
  this.style.background = `linear-gradient(to right, #3809df 0%, #3809df ${value}%, #82cfd0 ${value}%, #82cfd0)`;
});
function background() {
  progress.style.background = `#82cfd0`;
}
background();
