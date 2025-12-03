const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
const yearEl = document.getElementById('year');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
