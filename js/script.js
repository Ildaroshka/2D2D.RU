const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('menuOverlay');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
  overlay.classList.toggle('active');
});

/* закрытие по клику */
overlay.addEventListener('click', closeMenu);

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

function closeMenu() {
  burger.classList.remove('active');
  nav.classList.remove('open');
  overlay.classList.remove('active');
}