var slide = document.getElementById('slide');
var burgericon = document.getElementById('burgericon');
burgericon.addEventListener('click', function (e) {
  this.classList.toggle('open');
  slide.classList.toggle('open');
});
slide.addEventListener('click', function () {
  slide.classList.toggle('open');
  burgericon.classList.toggle('open');
});