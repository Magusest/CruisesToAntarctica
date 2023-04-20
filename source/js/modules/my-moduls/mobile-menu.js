import {FocusLock} from '../../utils/focus-lock';
const wrapper = document.querySelector('.wrapper');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuList = document.querySelector('[data-mobile-menu-list]');
const mobileMenuLink = document.querySelector('[data-mobile-link]');
const mobileMenuLinks = document.querySelectorAll('[data-mobile-link]');
const closeButton = document.querySelector('[data-close-mobile-menu]');
const openButton = document.querySelector('[data-burger]');
const mainLogo = document.querySelector('[data-main-logo]');
const navLogo = document.querySelector('[data-nav-logo]');
const focusLock = new FocusLock();
const main = document.querySelector('main');
const sections = document.querySelectorAll('section');

const closeMenuHendler = () => {
  document.body.style.overflow = '';
  mainLogo.style.translate = '0';
  mainLogo.style.opacity = '1';
  navLogo.style.display = 'none';
  mobileMenu.classList.remove('nav--active');
  mobileMenuList.classList.remove('nav__list--active');
  wrapper.classList.remove('wrapper--active');
  sections.forEach((section) => {
    section.style.position = 'relative';
    section.style.zIndex = '0';
  });
  focusLock.unlock();
};

const unscrollHandler = (e) => {
  if (e.target === main) {
    closeMenuHendler();
  }
};

const openButtonHendler = () => {
  mainLogo.style.translate = '36px';
  mainLogo.style.opacity = '0';
  navLogo.style.display = 'block';
  mobileMenu.classList.add('nav--active');
  mobileMenuList.classList.add('nav__list--active');
  document.body.style.overflow = 'hidden';
  closeButton.addEventListener('click', closeMenuHendler);
  main.addEventListener('click', unscrollHandler);
  sections.forEach((section) => {
    section.style.position = 'relative';
    section.style.zIndex = '-10';
  });
  focusLock.lock('[data-mobile-menu]');
  mobileMenuLink.focus();
  wrapper.classList.add('wrapper--active');
  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', closeMenuHendler);
  });
};

const onDocumentKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeMenuHendler();
  }
};

function openMobileMenu() {
  openButton.addEventListener('click', openButtonHendler);
  document.addEventListener('keydown', onDocumentKeyDown);
}

export {
  openMobileMenu
};
