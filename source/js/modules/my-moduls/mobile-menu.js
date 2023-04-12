import {FocusLock} from '../../utils/focus-lock';
const mobileMenuScreen = document.querySelector('[data-mobile-menu-screen]');
const mobileMenuLink = mobileMenuScreen.querySelector('[data-mobile-link]');
const mobileMenuLinks = mobileMenuScreen.querySelectorAll('[data-mobile-link]');
const closeButton = mobileMenuScreen.querySelector('[data-close-mobile-menu]');
const openButton = document.querySelector('[data-burger]');
const mainLogo = document.querySelector('[data-main-logo]');
const focusLock = new FocusLock();

const closeMenuHendler = () => {
  mobileMenuScreen.style.display = 'none';
  document.body.style.overflow = '';
  mainLogo.style.opacity = '1';
  mainLogo.style.translate = '0';
  focusLock.unlock();
};

const unscrolHendler = (evt) => {
  if (evt.target === mobileMenuScreen) {
    closeMenuHendler();
  }
}

const openButtonHendler = () => {
  mainLogo.style.opacity = '0';
  mainLogo.style.translate = '100px';
  mobileMenuScreen.style.display = 'block';
  document.body.style.overflow = 'hidden';
  closeButton.addEventListener('click', closeMenuHendler);
  focusLock.lock('[data-mobile-menu]');
  mobileMenuLink.focus();
  mobileMenuScreen.addEventListener('click', unscrolHendler);
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
