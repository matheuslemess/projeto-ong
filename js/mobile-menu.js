export function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.main-nav');

  if (!hamburger || !nav) {
    return;
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    document.body.classList.toggle('no-scroll');
  });
}