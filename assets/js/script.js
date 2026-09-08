'use strict';

const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');
const navigationLinks = [...document.querySelectorAll('[data-nav-link]')];
const pages = [...document.querySelectorAll('[data-page]')];
const pageShortcuts = document.querySelectorAll('[data-go-to]');

function activatePage(target, updateHash = true) {
  const targetPage = pages.find((page) => page.dataset.page === target);
  const targetLink = navigationLinks.find((link) => link.dataset.target === target);

  if (!targetPage || !targetLink) return;

  pages.forEach((page) => page.classList.toggle('active', page === targetPage));
  navigationLinks.forEach((link) => {
    const isActive = link === targetLink;
    link.classList.toggle('active', isActive);
    link.setAttribute('aria-current', isActive ? 'page' : 'false');
  });

  if (updateHash) history.replaceState(null, '', `#${target}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => activatePage(link.dataset.target));
});

pageShortcuts.forEach((button) => {
  button.addEventListener('click', () => activatePage(button.dataset.goTo));
});

if (sidebar && sidebarButton) {
  sidebarButton.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('active');
    sidebarButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const initialPage = window.location.hash.slice(1);
if (pages.some((page) => page.dataset.page === initialPage)) {
  activatePage(initialPage, false);
} else {
  activatePage('about', false);
}

window.addEventListener('hashchange', () => {
  const target = window.location.hash.slice(1);
  if (pages.some((page) => page.dataset.page === target)) activatePage(target, false);
});

const year = document.querySelector('[data-current-year]');
if (year) year.textContent = new Date().getFullYear();
