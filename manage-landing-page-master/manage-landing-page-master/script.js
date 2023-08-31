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

