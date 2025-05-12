const openBtn = document.getElementById('burger-open');
const closeBtn = document.getElementById('burger-close');
const navMenu = document.getElementById('nav-menu');

openBtn.addEventListener('click', () => {
  navMenu.classList.add('open');
  openBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('open');
  openBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
});
