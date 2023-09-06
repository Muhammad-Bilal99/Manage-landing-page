const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.ul')


hamburger.addEventListener('click', () => {
  ul.classList.toggle('active');
  if (ul.classList.contains('active')) {
    hamburger.src = 'images/icon-close.svg';
  }
  else{
    hamburger.src = 'images/icon-hamburger.svg';
  }
})

const slider = document.querySelector('.testimonials');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('pointerdown', (e) => {
  isDown = true
  slider.classList.add('slider-active')
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft
})
slider.addEventListener('pointerleave', () => {
  isDown = false
  slider.classList.remove('slider-active')
})
slider.addEventListener('pointerup', () => {
  isDown = false
  slider.classList.remove('slider-active')
})
slider.addEventListener('pointermove', (e) => {
  if (!isDown) return
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
})